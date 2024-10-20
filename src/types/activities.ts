import { z } from 'zod';
import { ImageSchema, MetaSchema } from './shared';

export const ActivitiesSchema = z.object({
	data: z.array(
		z.object({
			id: z.number(),
			documentId: z.string(),
			title: z.string(),
			slug: z.string(),
			thumbnail: ImageSchema,
		})
	),
	meta: MetaSchema,
});

export type TActivities = z.infer<typeof ActivitiesSchema>;
