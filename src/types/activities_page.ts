import { z } from 'zod';
import { ImageSchema, SeoSchema } from './shared';

export const FeaturedActivitySchema = z
	.object({
		id: z.number(),
		documentId: z.string(),
		title: z.string(),
		slug: z.string(),
		thumbnail: ImageSchema,
	})
	.nullable();

export const ActivitiesPageSchema = z.object({
	data: z.object({
		id: z.number(),
		documentId: z.string(),
		createdAt: z.string(),
		updatedAt: z.string(),
		publishedAt: z.string(),
		locale: z.string(),
		title: z.string(),
		featured_activity: FeaturedActivitySchema,
		seo: SeoSchema,
	}),
});

export type TFeaturedActivity = z.infer<typeof FeaturedActivitySchema>;
export type TActivitiesPage = z.infer<typeof ActivitiesPageSchema>;
