import BackgroundWrapper from '@/app/components/BackgroundWrapper';
import Hero from '@/app/components/galleries/[id]/Hero';
import Photos from '@/app/components/galleries/[id]/Photos';
import { env } from '@/env';
import { constructMetadata } from '@/lib/constructMetadata';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { galleriesQuery } from '@/queries/galleries';
import { galleryDetailsQuery } from '@/queries/gallery_details';
import { GalleriesSchema } from '@/types/galleries';
import { GalleryDetailsSchema } from '@/types/gallery_details';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { FunctionComponent } from 'react';

interface GalleryDetailsPageProps {
	params: {
		locale: string;
		slug: string;
	};
}

export const generateMetadata = async ({
	params: { locale, slug },
}: GalleryDetailsPageProps): Promise<Metadata> => {
	const {
		data: { seo },
	} = await fetchWithZod(
		GalleryDetailsSchema,
		`${env.NEXT_PUBLIC_API_URL}/galleries/${slug}?${galleryDetailsQuery(locale)}`
	);

	return constructMetadata(seo, `/galleries/${slug}`);
};

export const generateStaticParams = async ({
	params: { locale },
}: GalleryDetailsPageProps): Promise<{ locale: string; slug: string }[]> => {
	const { data } = await fetchWithZod(
		GalleriesSchema,
		`${env.NEXT_PUBLIC_API_URL}/galleries?${galleriesQuery(locale)}`
	);

	return data.map((gallery) => ({ slug: gallery.slug, locale }));
};

const GalleryDetailsPage: FunctionComponent<GalleryDetailsPageProps> = async ({
	params: { locale, slug },
}) => {
	setRequestLocale(locale);
	const { data } = await fetchWithZod(
		GalleryDetailsSchema,
		`${env.NEXT_PUBLIC_API_URL}/galleries/${slug}?${galleryDetailsQuery(locale)}`
	);

	return (
		<BackgroundWrapper>
			<div className='flex w-full flex-col gap-8 sm:gap-10 sm:py-10 md:gap-12 lg:items-center lg:gap-16'>
				<Hero title={data.title} />
				<Photos title={data.title} images={data.images} />
			</div>
		</BackgroundWrapper>
	);
};

export const revalidate = 60;
export const dynamicParams = true;

export default GalleryDetailsPage;
