import { FunctionComponent } from 'react';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { GalleriesSchema } from '@/types/galleries';
import { env } from '@/env';
import { galleriesQuery } from '@/queries/galleries';
import GalleriesClient from './GalleriesClient';

interface GalleriesProps {
	locale: string;
}

const Galleries: FunctionComponent<GalleriesProps> = async ({ locale }) => {
	const galleries = await fetchWithZod(
		GalleriesSchema,
		`${env.NEXT_PUBLIC_API_URL}/galleries?${galleriesQuery(locale)}`
	);

	return (
		<div className='md:-mb-18 -mb-11 bg-gray-200/40 px-5 py-8 backdrop-blur-sm sm:-mb-16 sm:px-8 lg:w-full lg:py-12 xl:py-16'>
			<GalleriesClient galleries={galleries} locale={locale} />
		</div>
	);
};

export default Galleries;
