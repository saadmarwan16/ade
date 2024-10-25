import { FunctionComponent } from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import Hero from '../components/home/Hero';
import MeAndPartners from '../components/home/MeAndPartners';
import Projects from '../components/home/Projects';
import RecentActivities from '../components/home/RecentActivities';
import { unstable_setRequestLocale } from 'next-intl/server';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { homePageQuery } from '@/queries/home_page';
import { env } from '@/env';
import { HomePageSchema } from '@/types/home_page';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/constructMetadata';

interface HomeProps {
	params: {
		locale: string;
	};
}

export const generateMetadata = async ({
	params: { locale },
}: HomeProps): Promise<Metadata> => {
	const {
		data: { seo },
	} = await fetchWithZod(
		HomePageSchema,
		`${env.NEXT_PUBLIC_API_URL}/home-page?${homePageQuery(locale)}`
	);

	return constructMetadata(seo, '/');
};

const Home: FunctionComponent<HomeProps> = async ({ params: { locale } }) => {
	unstable_setRequestLocale(locale);
	// throw new Error('Not implemented');
	const { data } = await fetchWithZod(
		HomePageSchema,
		`${env.NEXT_PUBLIC_API_URL}/home-page?${homePageQuery(locale)}`
	);

	return (
		<BackgroundWrapper>
			<div className='flex w-full max-w-[1400px] flex-col gap-8 p-5 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 lg:gap-16'>
				<Hero
					first_avatar={data.first_avatar}
					second_avatar={data.second_avatar}
				/>
				<MeAndPartners
					description={data.short_description}
					logos={data.logos}
				/>
				<Projects projects={data.projects} />
				<RecentActivities activities={data.activities} />
			</div>
		</BackgroundWrapper>
	);
};

export default Home;
