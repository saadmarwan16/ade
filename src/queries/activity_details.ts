import qs from 'qs';

export const activityDetailsQuery = (locale: string = 'en') =>
	qs.stringify(
		{
			fields: ['title', 'slug'],
			populate: {
				categories: '*',
				images: {
					fields: ['url'],
				},
				seo: {
					populate: {
						metaSocial: {
							populate: {
								image: {
									fields: ['url'],
								},
							},
						},
						metaImage: {
							fields: ['url'],
						},
					},
				},
			},
			locale: locale,
		},
		{ encodeValuesOnly: true }
	);
