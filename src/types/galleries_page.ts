import { z } from 'zod';
import { SeoSchema } from './shared';

export const GalleriesPageSchema = z.object({
	data: z.object({
		id: z.number(),
		documentId: z.string(),
		title: z.string(),
		createdAt: z.string(),
		updatedAt: z.string(),
		publishedAt: z.string(),
		locale: z.string(),
		seo: SeoSchema,
	}),
});

export type TGalleriesPage = z.infer<typeof GalleriesPageSchema>;
