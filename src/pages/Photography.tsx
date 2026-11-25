import { useEffect, useRef, useState } from "react";
import { featuredPhotos, archivePhotos, photoSrcSet } from "@/data/photography";
import imageSizes from "@/data/image-sizes.json";
import type { Photo } from "@/data/photography";
const photos = [...featuredPhotos, ...archivePhotos];
export default function Photography() {
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const origin = useRef<HTMLButtonElement | null>(null);
  const touch = useRef<number | null>(null);
  const close = () => {
    dialog.current?.close();
    setActive(null);
    origin.current?.focus();
  };
  const move = (step: number) =>
    setActive((a) =>
      a === null ? null : (a + step + photos.length) % photos.length,
    );
  useEffect(() => {
    if (active !== null && !dialog.current?.open) dialog.current?.showModal();
  }, [active]);
  useEffect(() => {
    if (active === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);
  const photo = (p: Photo, i: number) => (
    <figure key={p.src} className="photo-item">
      <button
        onClick={(e) => {
          origin.current = e.currentTarget;
          setActive(i);
        }}
        aria-label={`View photograph: ${p.caption}`}
      >
        <img
          {...imageSizes[p.src as keyof typeof imageSizes]}
          src={p.responsive ? p.src.replace("1800", "960") : p.src}
          srcSet={photoSrcSet(p)}
          sizes={
            i === 0
              ? "(max-width: 700px) 100vw, 50vw"
              : "(max-width: 700px) 100vw, 33vw"
          }
          alt={p.alt}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      </button>
      <figcaption>{p.caption}</figcaption>
    </figure>
  );
  return (
    <div className="container-x page-shell">
      <header className="page-intro photography-intro">
        <p className="eyebrow">Photography by Sam Laulusa</p>
        <h1>
          The moments
          <br />
          <span>in between.</span>
        </h1>
        <p>
          People, light and the little things. A collection of personal and
          event photography, seen through my lens and edited in Lightroom.
        </p>
      </header>
      <section aria-labelledby="featured-photos">
        <div className="section-heading">
          <h2 id="featured-photos">Featured photography</h2>
          <span>Recent selections</span>
        </div>
        <div className="photo-editorial">{featuredPhotos.map(photo)}</div>
      </section>
      <section className="section-space" aria-labelledby="archive-photos">
        <div className="section-heading">
          <h2 id="archive-photos">From the archive</h2>
          <span>Personal work & everyday observations</span>
        </div>
        <div className="photo-archive">
          {archivePhotos.map((p, i) => photo(p, i + featuredPhotos.length))}
        </div>
      </section>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-label="Full-screen photograph viewer"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            move(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            move(-1);
          }
        }}
        onTouchStart={(e) => {
          touch.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touch.current !== null) {
            const delta = e.changedTouches[0].clientX - touch.current;
            if (Math.abs(delta) > 50) move(delta < 0 ? 1 : -1);
            touch.current = null;
          }
        }}
      >
        <div className="viewer-toolbar">
          <span aria-live="polite">
            {active !== null ? `${active + 1} / ${photos.length}` : ""}
          </span>
          <button onClick={close} autoFocus>
            Close
          </button>
        </div>
        {active !== null && (
          <img src={photos[active].src} alt={photos[active].alt} />
        )}
        <div className="viewer-controls">
          <button onClick={() => move(-1)}>Previous</button>
          <p aria-live="polite">
            {active !== null ? photos[active].caption : ""}
          </p>
          <button onClick={() => move(1)}>Next</button>
        </div>
      </dialog>
    </div>
  );
}
