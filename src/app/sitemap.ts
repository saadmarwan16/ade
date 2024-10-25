import { MetadataRoute } from 'next';
import { Locale, getPathname, routing } from '@/i18n/routing';
import { env } from '@/env';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	return [
		getEntry('/'),
		getEntry('/activities'),
		getEntry('/galleries'),
		getEntry('/know-me'),
		getEntry({
			pathname: '/activities/[slug]',
			params: { slug: 'slug' },
		}),
		getEntry({
			pathname: '/galleries/[slug]',
			params: { slug: 'slug' },
		}),
	];
};

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntry(href: Href): {
	url: string;
	lastModified: Date;
	changeFrequency:
		| 'always'
		| 'never'
		| 'hourly'
		| 'daily'
		| 'weekly'
		| 'monthly'
		| 'yearly'
		| undefined;
	alternates: {
		languages: {
			[k: string]: string;
		};
	};
} {
	const val = Object.fromEntries(
		routing.locales.map((locale) => [locale, getUrl(href, locale)])
	);

	return {
		url: getUrl(href, routing.defaultLocale),
		lastModified: new Date(),
		changeFrequency: 'hourly',
		alternates: {
			languages: Object.fromEntries(
				routing.locales.map((locale) => [locale, getUrl(href, locale)])
			),
		},
	};
}

function getUrl(href: Href, locale: Locale) {
	const pathname = getPathname({ locale, href });
	return env.NEXT_PUBLIC_BASE_URL + pathname;
}

export default sitemap;
