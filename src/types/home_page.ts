import { z } from 'zod';
import { ImageSchema, SeoSchema } from './shared';

export const AvatarSchema = z.object({
	id: z.number(),
	alt: z.string(),
	image: ImageSchema,
});

export const LogosSchema = z.array(
	z.object({
		id: z.number(),
		company: z.string(),
		link: z.string(),
		image: ImageSchema,
	})
);

export const ProjectsSchema = z.array(
	z.object({
		id: z.number(),
		type: z.string(),
		title: z.string(),
		description: z.string(),
		link: z.string().url().nullable(),
		image: ImageSchema,
	})
);

export const ActivitesSchema = z.array(
	z.object({
		id: z.number(),
		documentId: z.string(),
		title: z.string(),
		slug: z.string(),
		thumbnail: ImageSchema,
	})
);

export const HomePageSchema = z.object({
	data: z.object({
		id: z.number(),
		documentId: z.string(),
		short_description: z.string(),
		first_avatar: AvatarSchema,
		second_avatar: AvatarSchema,
		logos: LogosSchema,
		projects: ProjectsSchema,
		activities: ActivitesSchema,
		seo: SeoSchema,
	}),
});

export type TAvatar = z.infer<typeof AvatarSchema>;
export type TLogos = z.infer<typeof LogosSchema>;
export type TProjects = z.infer<typeof ProjectsSchema>;
export type TActivites = z.infer<typeof ActivitesSchema>;
export type THomePage = z.infer<typeof HomePageSchema>;
