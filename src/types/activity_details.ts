import { z } from 'zod';
import { type BlocksContent } from '@strapi/blocks-react-renderer';
import { ImageSchema, SeoSchema } from './shared';

export const ActivityDetailsCategoriesSchema = z.array(
	z.object({ id: z.number(), title: z.string() })
);

export const ActivityDetailsBodySchema = z.custom<BlocksContent>((val) => val);

export const ActivityDetailsImagesSchema = z.array(ImageSchema);

export const ActivityDetailsSchema = z.object({
	data: z.object({
		id: z.number(),
		documentId: z.string(),
		title: z.string(),
		body: ActivityDetailsBodySchema,
		createdAt: z.string(),
		updatedAt: z.string(),
		publishedAt: z.null(),
		locale: z.string(),
		slug: z.string(),
		categories: ActivityDetailsCategoriesSchema,
		images: ActivityDetailsImagesSchema,
		seo: SeoSchema,
	}),
});

export type TActivityDetailsCategories = z.infer<
	typeof ActivityDetailsCategoriesSchema
>;
export type TActivityDetailsBody = z.infer<typeof ActivityDetailsBodySchema>;
export type TActivityDetailsImages = z.infer<
	typeof ActivityDetailsImagesSchema
>;
export type TActivityDetails = z.infer<typeof ActivityDetailsSchema>;
