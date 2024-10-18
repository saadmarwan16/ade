import qs from 'qs';

export const knowMePageQuery = (locale: string = 'en') =>
	qs.stringify(
		{
			populate: {
				details: {
					populate: {
						image: {
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
