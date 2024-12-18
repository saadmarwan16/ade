import BackgroundWrapper from '@/app/components/BackgroundWrapper';
import Galleries from '@/app/components/galleries/Galleries';
import Hero from '@/app/components/galleries/Hero';
import GalleriesSkeleton from '@/app/components/GalleriesSkeleton';
import { env } from '@/env';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/constructMetadata';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { galleriesPageQuery } from '@/queries/galleries_page';
import { GalleriesPageSchema } from '@/types/galleries_page';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { FunctionComponent, Suspense } from 'react';

interface GalleriesPageProps {
	params: {
		locale: string;
	};
}

export const generateMetadata = async ({
	params: { locale },
}: GalleriesPageProps): Promise<Metadata> => {
	const {
		data: { seo },
	} = await fetchWithZod(
		GalleriesPageSchema,
		`${env.NEXT_PUBLIC_API_URL}/galleries-page?${galleriesPageQuery(locale)}`
	);

	return constructMetadata(seo, '/galleries');
};

const GalleriesPage: FunctionComponent<GalleriesPageProps> = async ({
	params: { locale },
}) => {
	setRequestLocale(locale);
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

export const revalidate = 60;

export default GalleriesPage;
