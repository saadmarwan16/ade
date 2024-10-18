import qs from 'qs';

export const homePageQuery = (locale: string = 'en') =>
	qs.stringify(
		{
			populate: {
				first_avatar: {
					populate: {
						image: {
							fields: ['url'],
						},
					},
				},
				second_avatar: {
					populate: {
						image: {
							fields: ['url'],
						},
					},
				},
				logos: {
					populate: {
						image: {
							fields: ['url'],
						},
					},
				},
				projects: {
					populate: {
						image: {
							fields: ['url'],
						},
					},
				},
				activities: {
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
			fields: ['short_description'],
			locale: locale,
		},
		{ encodeValuesOnly: true }
	);
