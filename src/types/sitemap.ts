import { z } from "zod"
import { MetaSchema } from "./shared"

export const SitemapDataSchema = z.array(
  z.object({ id: z.number(), documentId: z.string(), slug: z.string() })
)

export const SitemapSchema = z.object({
  data: SitemapDataSchema,
  meta: MetaSchema
})

export type TSitemapData = z.infer<typeof SitemapDataSchema>;
export type TSitemap = z.infer<typeof SitemapSchema>;
