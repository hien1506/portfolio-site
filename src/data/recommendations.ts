export interface Recommendation {
  title: string;
  description: string;
  category: string;
  link: string;
  image?: string;
}

// Palette derived from profile photo — cafe blues, warm beige, orange signage, muted pink
const palette = [
  "#5b9aad", // blue chairs
  "#d4a87c", // warm beige wall
  "#e0965a", // orange signage
  "#c9a0a0", // muted pink table
  "#7a9b8a", // faded green railing
  "#b8a58a", // sandy concrete
];

export function paletteColor(index: number): string {
  return palette[index % palette.length];
}

export const recommendations: Recommendation[] = [
  {
    title: "The Nature of Code",
    description:
      "A book on generative systems and creative coding by Daniel Shiffman.",
    category: "Book",
    link: "https://natureofcode.com/",
  },
  {
    title: "Uxn / Varvara",
    description:
      "A personal computing stack built for longevity. Small tools, made to last, running on a tiny virtual machine.",
    category: "Tool",
    link: "https://100r.co/site/uxn.html",
  },
  {
    title: "The Web's Grain",
    description:
      "Frank Chimero on designing for the web's natural material properties rather than fighting against them.",
    category: "Essay",
    link: "https://frankchimero.com/blog/2015/the-webs-grain/",
  },
  {
    title: "Learning Synths",
    description:
      "Ableton's interactive guide to synthesis. Beautiful example of teaching through direct manipulation.",
    category: "Interactive",
    link: "https://learningsynths.ableton.com",
  },
  {
    title: "Aspect Ratios with Sinners Director Ryan Coogler",
    description: "Aspect Ratios with Sinners Director Ryan Coogler.",
    category: "Video",
    link: "https://www.youtube.com/watch?v=78Ru62uFM0s",
  },
];
