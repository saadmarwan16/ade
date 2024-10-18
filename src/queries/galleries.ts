import qs from 'qs';

export const galleriesQuery = (locale: string = 'en', page: number = 1) =>
	qs.stringify(
		{
			fields: ['title', 'slug'],
			populate: {
				thumbnail: {
					fields: ['url'],
				},
				images: {
					fields: ['id'],
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
