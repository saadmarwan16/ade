import { TSeo } from '@/types/shared';
import { Metadata } from 'next';
import { constructImageLink } from './constructLink';
import { transformMetaSocials } from './transformMetaSocials';

export const constructMetadata = (seo: TSeo, canonical: string): Metadata => {
	const favicon = seo.metaImage?.url
		? constructImageLink(seo.metaImage.url)
		: undefined;
	const transformedMetaSocials = transformMetaSocials(seo.metaSocial);

	return {
		title: `${seo.metaTitle} | Adebayo Ademon`,
		keywords: seo.keywords ?? 'Adebayo,ademon,amedee',
		description: seo.metaDescription,
		icons: favicon,
		twitter: transformedMetaSocials?.Twitter,
		openGraph: {
			type: 'website',
			...transformedMetaSocials?.Facebook,
		},
		alternates: {
			canonical,
			languages: {
				en: 'en',
				fr: 'fr',
				tr: 'fr',
			},
		},
		referrer: 'no-referrer',
	};
};
