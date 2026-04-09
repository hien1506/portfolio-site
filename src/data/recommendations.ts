export interface Recommendation {
  title: string;
  description: string;
  category: string;
  color: string;
  link: string;
}

export const recommendations: Recommendation[] = [
  {
    title: "Designing Programs",
    description:
      "Karl Gerstner's systematic approach to design. A framework for thinking about visual rules as generative systems.",
    category: "Book",
    color: "#6a9daf",
    link: "https://www.lars-mueller-publishers.com/designing-programmes",
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
    title: "Figma",
    description:
      "Still the best multiplayer design tool. The plugin ecosystem and community resources are unmatched.",
    category: "Tool",
    color: "#2e2e2e",
    link: "https://www.figma.com",
  },
  {
    title: "Learning Synths",
    description:
      "Ableton's interactive guide to synthesis. Beautiful example of teaching through direct manipulation.",
    category: "Interactive",
    color: "#d9cdb8",
    link: "https://learningsynths.ableton.com",
  },
  {
    title: "Learning Synths",
    description:
      "Ableton's interactive guide to synthesis. Beautiful example of teaching through direct manipulation.",
    category: "Interactive",
    color: "#4a8b7f",
    link: "https://learningsynths.ableton.com",
  },
];
