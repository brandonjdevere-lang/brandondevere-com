import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		category: z.enum(['clarity', 'systems', 'communication']),
		summary: z.string(),
		featured: z.boolean().default(false),
	}),
});

const writing = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		summary: z.string(),
		featured: z.boolean().default(false),
	}),
});

export const collections = { work, writing };
