import { z } from 'zod';
import { SeoSchema } from './shared';

export const GalleryDetailsImageSchema = z.array(
	z.object({
		id: z.number(),
		documentId: z.string(),
		url: z.string(),
		width: z.number(),
		height: z.number(),
	})
);

export const GalleryDetailsSchema = z.object({
	data: z.object({
		id: z.number(),
		documentId: z.string(),
		title: z.string(),
		createdAt: z.string(),
		updatedAt: z.string(),
		publishedAt: z.null(),
		locale: z.string(),
		slug: z.string(),
		images: GalleryDetailsImageSchema,
		seo: SeoSchema,
	}),
});

export type TGalleryDetailsImages = z.infer<typeof GalleryDetailsImageSchema>;
export type TGalleryDetails = z.infer<typeof GalleryDetailsSchema>;
