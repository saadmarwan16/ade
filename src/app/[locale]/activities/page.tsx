import { FunctionComponent, Suspense } from 'react';
import { Separator } from '@/components/ui/separator';
import BackgroundWrapper from '@/app/components/BackgroundWrapper';
import HeroTitle from '@/app/components/activities/HeroTitle';
import Featured from '@/app/components/activities/Featured';
import Tabs from '@/app/components/activities/Tabs';
import Activities from '@/app/components/activities/Activities';
import { setRequestLocale } from 'next-intl/server';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { ActivitiesPageSchema } from '@/types/activities_page';
import { env } from '@/env';
import { activitiesPageQuery } from '@/queries/activities_page';
import ActivitiesSkeleton from '@/app/components/ActivitiesSkeleton';
import { capitalizeCategory } from '@/lib/capitalizeCategory';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/constructMetadata';

interface ActivitiesPageProps {
	params: {
		locale: string;
	};
	searchParams: { category: string };
}

export const generateMetadata = async ({
	params: { locale },
}: ActivitiesPageProps): Promise<Metadata> => {
	const {
		data: { seo },
	} = await fetchWithZod(
		ActivitiesPageSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities-page?${activitiesPageQuery(locale)}`
	);

	return constructMetadata(seo, '/activities');
};

const ActivitiesPage: FunctionComponent<ActivitiesPageProps> = async ({
	params: { locale },
	searchParams,
}) => {
	setRequestLocale(locale);
	const category = capitalizeCategory(searchParams.category);
	const { data } = await fetchWithZod(
		ActivitiesPageSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities-page?${activitiesPageQuery(locale)}`
	);

	return (
		<BackgroundWrapper>
			<div className='flex w-full max-w-[1400px] flex-col gap-8 p-5 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 lg:gap-16'>
				<HeroTitle title={data.title} />
				<Featured activity={data.featured_activity} />
				<Separator className='bg-gray-400' />
				<Tabs category={category} />
				<Suspense fallback={<ActivitiesSkeleton />}>
					<Activities locale={locale} category={category} />
				</Suspense>
			</div>
		</BackgroundWrapper>
	);
};

export const revalidate = 60;

export default ActivitiesPage;
