import { z } from 'zod';

export const MetaSocialSchema = z.object({
	id: z.number(),
	socialNetwork: z.enum(['Facebook', 'Twitter']),
	title: z.string(),
	description: z.string(),
	image: z
		.object({
			id: z.number(),
			documentId: z.string(),
			url: z.string(),
			width: z.number(),
			height: z.number(),
		})
		.nullable(),
});

export const SeoSchema = z.object({
	id: z.number(),
	metaTitle: z.string(),
	metaDescription: z.string(),
	keywords: z.string().nullable(),
	metaRobots: z.string().nullable(),
	structuredData: z.null(),
	metaViewport: z.string().nullable(),
	canonicalURL: z.string().nullable(),
	metaSocial: z.array(MetaSocialSchema).nullable(),
	metaImage: z
		.object({
			id: z.number(),
			documentId: z.string(),
			url: z.string(),
		})
		.nullable(),
});

export const ImageSchema = z.object({
	id: z.number(),
	documentId: z.string(),
	url: z.string(),
});

export const MetaSchema = z.object({
	pagination: z.object({
		page: z.number(),
		pageSize: z.number(),
		pageCount: z.number(),
		total: z.number(),
	}),
});

export type TMetaSocial = z.infer<typeof MetaSocialSchema>;
export type TSeo = z.infer<typeof SeoSchema>;
export type TImage = z.infer<typeof ImageSchema>;
export type TMeta = z.infer<typeof MetaSchema>;
