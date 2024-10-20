import { z } from 'zod';
import { ImageSchema, MetaSchema } from './shared';

export const GalleriesImagesSchema = z.array(
	z.object({ id: z.number(), documentId: z.string() })
);

export const GalleriesSchema = z.object({
	data: z.array(
		z.object({
			id: z.number(),
			documentId: z.string(),
			title: z.string(),
			slug: z.string(),
			thumbnail: ImageSchema,
			images: GalleriesImagesSchema,
		})
	),
	meta: MetaSchema,
});

export type TGalleriesImages = z.infer<typeof GalleriesImagesSchema>;
export type TGalleries = z.infer<typeof GalleriesSchema>;
