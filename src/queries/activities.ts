import qs from 'qs';

type Category = 'All' | 'Personal' | 'Professional' | 'Social' | 'Political';

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
