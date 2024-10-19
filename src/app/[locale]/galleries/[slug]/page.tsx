import BackgroundWrapper from '@/app/components/BackgroundWrapper';
import Hero from '@/app/components/galleries/[id]/Hero';
import Photos from '@/app/components/galleries/[id]/Photos';
import { env } from '@/env';
import { fetchWithZod } from '@/lib/fetchWithZod';
// import { galleriesQuery } from '@/queries/galleries';
import { galleryDetailsQuery } from '@/queries/gallery_details';
import { GalleryDetailsSchema } from '@/types/gallery_details';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FunctionComponent } from 'react';

interface GalleryDetailsPageProps {
	params: {
		locale: string;
		slug: string;
	};
}

export async function generateMetadata({
	params: { locale },
}: GalleryDetailsPageProps) {
	// const t = await getTranslations({
	// 	locale: locale,
	// 	namespace: 'ActivitiesPage',
	// });

	return {
		locale: locale,
	};
}

export async function generateStaticParams({
	params: { locale },
}: GalleryDetailsPageProps) {
	// const { data } = await fetchWithZod(
	// 	GalleryDetailsSchema,
	// 	`${env.NEXT_PUBLIC_API_URL}/know-me?${galleriesQuery(locale)}`
	// );
	// data.
	return [{ id: '123' }];
}

const GalleryDetailsPage: FunctionComponent<GalleryDetailsPageProps> = async ({
	params: { locale, slug },
}) => {
	unstable_setRequestLocale(locale);
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

export default GalleryDetailsPage;
