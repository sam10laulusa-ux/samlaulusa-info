import { CTAButton } from "@/components/ui-primitives";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-start justify-center pt-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-display text-5xl font-light">This page doesn't exist.</h1>
      <div className="mt-8">
        <CTAButton to="/">Back home</CTAButton>
      </div>
    </section>
  );
}
