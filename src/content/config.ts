// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from "astro:content";
// import { docsSchema } from "@astrojs/starlight/schema";

const productsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      img: image(),
      family: z.array(z.string()),
      price: z.number(),
      priceDiscount: z.number().optional(),
      id: z.string(),
      weight: z.number(),
      rating: z.number(),
    }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      contents: z.array(z.string()),
      author: z.string(),
      role: z.string().optional(),
      authorImage: image(),
      authorImageAlt: z.string(),
      pubDate: z.date(),
      cardImage: image(),
      cardImageAlt: z.string(),
      readTime: z.number(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
  products: productsCollection,
  blog: blogCollection,
};
