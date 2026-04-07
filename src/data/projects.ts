export type Category = "project" | "writing" | "experiment";

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category: Category;
}

export const projects: Project[] = [
  {
    title: "Form System",
    description:
      "A design system for accessible, composable form components built for scale.",
    image:
      "https://images.ctfassets.net/5zmqgp0yol4w/5YpMgPAChZ20Lu75vcFTxH/0ddb5bab69c349c417f253bc179714f0/Wing-It.png?w=2094&h=1396&q=50&fm=webp",
    link: "/projects/form-system",
    category: "project",
  },
  {
    title: "On Digital Gardens",
    description:
      "Exploring the practice of learning in public and tending to ideas over time.",
    image:
      "https://photoshien.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdyf6bb1e6%2Fimage%2Fupload%2Fq_auto%3Aeco%2Cf_webp%2Cc_fill%2Cw_1280%2Cdpr_auto%2Fmy-photos%2F000044_gjqcqe.webp&w=1080&q=75",
    link: "/projects/digital-gardens",
    category: "writing",
  },
  {
    title: "Color Notation",
    description: "Paragraphy itaque depopulo umquam succurro. Angulus.",
    image: "",
    link: "/projects/color-notation",
    category: "experiment",
  },
  {
    title: "Type Scale Tool",
    description: "Paragraphy itaque depopulo umquam succurro. Angulus.",
    image: "",
    link: "/projects/type-scale",
    category: "project",
  },
  {
    title: "Grid Playground",
    description: "Paragraphy itaque depopulo umquam succurro. Angulus.",
    image: "",
    link: "/projects/grid-playground",
    category: "experiment",
  },
  {
    title: "Motion Studies",
    description: "Paragraphy itaque depopulo umquam succurro. Angulus.",
    image: "",
    link: "/projects/motion-studies",
    category: "experiment",
  },
  {
    title: "Web Accessibility",
    description: "Paragraphy itaque depopulo umquam succurro. Angulus.",
    image: "",
    link: "/projects/web-accessibility",
    category: "writing",
  },
  {
    title: "Layout Patterns",
    description: "Paragraphy itaque depopulo umquam succurro. Angulus.",
    image: "",
    link: "/projects/layout-patterns",
    category: "project",
  },
];
