import { SitemapSchema, TSitemapData } from '@/types/sitemap';
import { fetchWithZod } from './fetchWithZod';
import { sitemapQuery } from '@/queries/sitemap';

const fetchPage = async (endpoint: string) => {
	try {
		const response = await fetchWithZod(SitemapSchema, endpoint);

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const fetchAllSitemapData = async (baseUrl: string, locale: string) => {
	let allData: TSitemapData = [];
	let currentPage = 1;
	let hasNextPage = true;
	// `${env.NEXT_PUBLIC_API_URL}/activities-page?${activitiesPageQuery(locale)}`
	const endpoint = `${baseUrl}?${sitemapQuery(locale, currentPage)}`;

	while (hasNextPage) {
		const response = await fetchPage(endpoint);

		if (!response) {
			break;
		}

		allData = [...allData, ...response.data];

		hasNextPage = currentPage < response.meta.pagination.pageCount;
		currentPage++;
	}

	return allData;
};
