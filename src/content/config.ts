import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)

const editorialCollection = defineCollection({
  type: 'content', // 'data' for JSON
  schema: z.object({
    title: z.string().optional(),
  }),
});

const postsCollection = defineCollection({
  type: 'content', // 'data' for JSON
  schema: z.object({
    title: z.string().optional(),
  }),
});

// Key should match your collection directory name in "src/content"
export const collections = {
  editorial: editorialCollection,
  posts: postsCollection,
};
