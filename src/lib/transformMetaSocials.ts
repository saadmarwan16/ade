import { TMetaSocial } from '@/types/shared';

type TTransformedMetaSocial = {
	title: string;
	description: string;
	images?: {
		url: string;
		width: number;
		height: number;
	};
};

const transformMetaSocial = (metaSocial: TMetaSocial) => {
	return {
		title: metaSocial.title,
		description: metaSocial.description,
		images: metaSocial.image
			? {
					url: metaSocial.image.url,
					width: metaSocial.image.width,
					height: metaSocial.image.height,
				}
			: undefined,
	};
};

export const transformMetaSocials = (metaSocials: TMetaSocial[] | null) => {
	if (!metaSocials) return;

	const transformedMetaSocials: {
		Facebook?: TTransformedMetaSocial;
		Twitter?: TTransformedMetaSocial;
	} = {};

	metaSocials.forEach((metaSocial) => {
		transformedMetaSocials[metaSocial.socialNetwork] =
			transformMetaSocial(metaSocial);
	});

	return transformedMetaSocials;
};
