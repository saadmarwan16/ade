import BackgroundWrapper from '@/app/components/BackgroundWrapper';
import Galleries from '@/app/components/galleries/Galleries';
import Hero from '@/app/components/galleries/Hero';
import GalleriesSkeleton from '@/app/components/GalleriesSkeleton';
import { env } from '@/env';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { galleriesPageQuery } from '@/queries/galleries_page';
import { GalleriesPageSchema } from '@/types/galleries_page';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FunctionComponent, Suspense } from 'react';

interface GalleriesPageProps {
	params: {
		locale: string;
	};
}

export async function generateMetadata({
	params: { locale },
}: GalleriesPageProps) {
	// const t = await getTranslations({
	// 	locale: locale,
	// 	namespace: 'ActivitiesPage',
	// });

	return {
		locale: locale,
	};
}

const GalleriesPage: FunctionComponent<GalleriesPageProps> = async ({
	params: { locale },
}) => {
	unstable_setRequestLocale(locale);
	// throw new Error('404 Not Found'); // This is from the strapi api error object
	const { data } = await fetchWithZod(
		GalleriesPageSchema,
		`${env.NEXT_PUBLIC_API_URL}/galleries-page?${galleriesPageQuery(locale)}`
	);

	return (
		<BackgroundWrapper>
			<div className='flex w-full flex-col gap-8 sm:gap-10 sm:py-10 md:gap-12 lg:items-center lg:gap-16'>
				<Hero title={data.title} />

				<Suspense fallback={<GalleriesSkeleton />}>
					<Galleries locale={locale} />
				</Suspense>
			</div>
		</BackgroundWrapper>
	);
};

export default GalleriesPage;
