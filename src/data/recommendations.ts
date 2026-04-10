export interface Recommendation {
  title: string;
  description: string;
  category: string;
  color: string;
  link: string;
  image?: string;
}

export const recommendations: Recommendation[] = [
  {
    title: "The Nature of Code",
    description:
      "A book on generative systems and creative coding by Daniel Shiffman.",
    category: "Book",
    color: "#6a9daf",
    link: "https://natureofcode.com/",
    image:
      "https://m.media-amazon.com/images/I/61F2XWTTtYL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Uxn / Varvara",
    description:
      "A personal computing stack built for longevity. Small tools, made to last, running on a tiny virtual machine.",
    category: "Tool",
    color: "#d4917a",
    link: "https://100r.co/site/uxn.html",
  },
  {
    title: "The Web's Grain",
    description:
      "Frank Chimero on designing for the web's natural material properties rather than fighting against them.",
    category: "Essay",
    color: "#d4a833",
    link: "https://frankchimero.com/blog/2015/the-webs-grain/",
  },
  {
    title: "Learning Synths",
    description:
      "Ableton's interactive guide to synthesis. Beautiful example of teaching through direct manipulation.",
    category: "Interactive",
    color: "#d9cdb8",
    link: "https://learningsynths.ableton.com",
  },
];
