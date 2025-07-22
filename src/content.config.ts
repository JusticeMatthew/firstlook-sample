import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const games = defineCollection({
  loader: file("src/data/games.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = { games };
