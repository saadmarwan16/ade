import { Category } from '@/lib/capitalizeCategory';
import qs from 'qs';

export const activitiesQuery = (
	locale: string = 'en',
	page: number = 1,
	category: Category = 'All'
) =>
	qs.stringify(
		{
			fields: ['title', 'slug'],
			populate: {
				thumbnail: {
					fields: ['url'],
				},
			},
			filters:
				category === 'All'
					? {}
					: {
							categories: {
								title: {
									$eq: category,
								},
							},
						},
			sort: ['createdAt:desc'],
			pagination: {
				page: page,
				pageSize: 24,
			},
			locale: locale,
		},
		{ encodeValuesOnly: true }
	);
