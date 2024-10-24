import { z } from 'zod';

export const SocialSchema = z.object({ id: z.number(), link: z.string() });

export const EmailSchema = z.object({ id: z.number(), email: z.string() });

export const AvatarSchema = z.object({
	id: z.number(),
	alt: z.string(),
	image: z.object({
		id: z.number(),
		documentId: z.string(),
		url: z.string(),
	}),
});

export const MetaSchema = z.object({
	data: z.object({
		id: z.number(),
		documentId: z.string(),
		createdAt: z.string(),
		updatedAt: z.string(),
		publishedAt: z.string(),
		locale: z.string(),
		instagram: SocialSchema,
		linkedin: SocialSchema,
		email: EmailSchema,
		avatar: AvatarSchema,
	}),
});

export type TSocial = z.infer<typeof SocialSchema>;
export type TEmail = z.infer<typeof EmailSchema>;
export type TAvatar = z.infer<typeof AvatarSchema>;
export type TMeta = z.infer<typeof MetaSchema>;
