import { FunctionComponent } from 'react';
import TitleCategories from '@/app/components/activities/[id]/TitleCategories';
import CustomCarousel from '@/app/components/activities/[id]/CustomCarousel';
import Content from '@/app/components/activities/[id]/Content';
import Socials from '@/app/components/activities/[id]/Socials';
import { setRequestLocale } from 'next-intl/server';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { ActivityDetailsSchema } from '@/types/activity_details';
import { env } from '@/env';
import { activityDetailsQuery } from '@/queries/activity_details';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/constructMetadata';
import { ActivitiesSchema } from '@/types/activities';
import { activitiesQuery } from '@/queries/activities';

interface ActivityDetailsPageProps {
	params: {
		locale: string;
		slug: string;
	};
}

export const generateMetadata = async ({
	params: { locale, slug },
}: ActivityDetailsPageProps): Promise<Metadata> => {
	const {
		data: { seo },
	} = await fetchWithZod(
		ActivityDetailsSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities/${slug}?${activityDetailsQuery(locale)}`
	);

	return constructMetadata(seo, `/activities/${slug}`);
};

export const generateStaticParams = async ({
	params: { locale },
}: ActivityDetailsPageProps): Promise<{ locale: string; slug: string }[]> => {
	const { data } = await fetchWithZod(
		ActivitiesSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities?${activitiesQuery(locale)}`
	);

	return data.map((activity) => ({ slug: activity.slug, locale }));
};

const ActivityDetailsPage: FunctionComponent<
	ActivityDetailsPageProps
> = async ({ params: { locale, slug } }) => {
	setRequestLocale(locale);
	const { data } = await fetchWithZod(
		ActivityDetailsSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities/${slug}?${activityDetailsQuery(locale)}`
	);

	return (
		<main className='flex justify-center p-5 sm:px-8 sm:pt-8 lg:pt-12 xl:pt-16'>
			<div className='flex w-full max-w-[1400px] flex-col gap-2 md:gap-4'>
				<TitleCategories title={data.title} categories={data.categories} />
				<CustomCarousel title={data.title} images={data.images} />
				<Content body={data.body} />
				<Socials slug={slug} />
			</div>
		</main>
	);
};

export const revalidate = 60;
export const dynamicParams = true;

export default ActivityDetailsPage;
