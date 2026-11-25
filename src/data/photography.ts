import { photography } from "./content";
export interface Photo {
  src: string;
  alt: string;
  caption: string;
  responsive?: boolean;
}
// Reorder this array to change the featured sequence. Keep 3–5 photos featured.
export const featuredPhotos: Photo[] = [
  {
    src: "/photos/DSC03951-1800.webp",
    alt: "A mother lifting her baby into golden evening light",
    caption: "Held in the light",
    responsive: true,
  },
  {
    src: "/photos/DSC03719-1800.webp",
    alt: "A young child walking across a sunlit autumn lawn",
    caption: "A little independence",
    responsive: true,
  },
  {
    src: "/photos/DSC03816-1800.webp",
    alt: "Red and amber autumn leaves against a softly blurred background",
    caption: "The changing season",
    responsive: true,
  },
  {
    src: "/photos/DSC03839-1800.webp",
    alt: "Black-and-white close-up of a child’s curls",
    caption: "The smallest details",
    responsive: true,
  },
  {
    src: "/photos/DSC04032-1800.webp",
    alt: "A mother holding a baby in a knitted bonnet beneath warm lights",
    caption: "Close to home",
    responsive: true,
  },
];
const descriptions = [
  "A child beside a pond",
  "Dancers performing on an outdoor stage",
  "An aquarium scene",
  "A portrait in golden-hour light",
  "A child lifted into the air above a beach",
  "A child watching a seated performer",
  "A walk beneath palm trees",
  "A baby in a carrier",
  "A group posing together on a beach",
  "A baby wearing a bow headband",
  "Three women standing at the water’s edge",
  "A child playing at the shoreline with an adult nearby",
  "A child resting on an adult’s shoulders",
];
export const archivePhotos: Photo[] = [
  {
    src: "/photos/DSC03714-1800.webp",
    alt: "A young child sitting in the grass on an autumn afternoon",
    caption: "An afternoon outside",
    responsive: true,
  },
  ...photography.map((p, i) => ({
    src: p.src,
    alt: descriptions[i] + " — photography by Sam Laulusa",
    caption: "From the archive",
  })),
];
export const photoSrcSet = (p: Photo) =>
  p.responsive
    ? [480, 960, 1800]
        .map((w) => `${p.src.replace("1800", String(w))} ${w}w`)
        .join(", ")
    : undefined;
