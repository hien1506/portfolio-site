import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["project", "writing", "experiment"]),
    image: z.string().optional(),
    model: z.string().optional(),
    /** When set, list row links here and no static page is generated. */
    externalUrl: z.string().url().optional(),
    publishedAt: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
