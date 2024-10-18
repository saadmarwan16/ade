import qs from 'qs';

export const galleryDetailsQuery = (locale: string = 'en') =>
	qs.stringify(
		{
			fields: ['title', 'slug'],
			populate: {
				images: {
					fields: ['url', 'width', 'height'],
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
