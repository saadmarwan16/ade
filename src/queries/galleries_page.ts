import qs from 'qs';

export const galleriesPageQuery = (locale: string = 'en') =>
	qs.stringify(
		{
			populate: {
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
