import qs from 'qs';

export const metaQuery = (locale: string = 'en') =>
	qs.stringify(
		{
			populate: {
				instagram: '*',
				linkedin: '*',
				email: '*',
				avatar: {
					populate: {
						image: {
							fields: ['url'],
						},
					},
				},
			},
			locale: locale,
		},
		{ encodeValuesOnly: true }
	);
