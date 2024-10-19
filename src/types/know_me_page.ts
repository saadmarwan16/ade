import { z } from 'zod';
import { SeoSchema } from './shared';

export const KnowMeDetailsSchema = z.array(
	z.object({
		id: z.number(),
		title: z.string(),
		description: z.string(),
		image: z.object({
			id: z.number(),
			documentId: z.string(),
			url: z.string(),
		}),
	})
);

export const KnowMeSchema = z.object({
	data: z.object({
		id: z.number(),
		documentId: z.string(),
		createdAt: z.string(),
		updatedAt: z.string(),
		publishedAt: z.string(),
		locale: z.string(),
		details: KnowMeDetailsSchema,
		seo: SeoSchema,
	}),
});

export type TKnowMeDetails = z.infer<typeof KnowMeDetailsSchema>;
export type TKnowMe = z.infer<typeof KnowMeSchema>;
