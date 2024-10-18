import qs from 'qs';

export const activitiesPageQuery = (locale: string = 'en') =>
	qs.stringify(
		{
			populate: {
				featured_activity: {
					fields: ['title', 'slug'],
					populate: {
						thumbnail: {
							fields: ['url'],
						},
					},
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
