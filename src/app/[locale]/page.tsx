import { FunctionComponent } from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import Hero from '../components/home/Hero';
import MeAndPartners from '../components/home/MeAndPartners';
import Projects from '../components/home/Projects';
import RecentActivities from '../components/home/RecentActivities';
import { unstable_setRequestLocale } from 'next-intl/server';
// import { getTranslations } from 'next-intl/server';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { homePageQuery } from '@/queries/home_page';
import { env } from '@/env';
import { HomePageSchema } from '@/types/home_page';
import { Metadata } from 'next';
import { constructImageLink } from '@/lib/constructLink';

interface HomeProps {
	params: {
		locale: string;
	};
}

export const generateMetadata = async ({
	params: { locale },
}: HomeProps): Promise<Metadata> => {
	// const t = await getTranslations({
	// 	locale: locale,
	// 	namespace: 'ActivitiesPage',
	// });
	const {
		data: { seo },
	} = await fetchWithZod(
		HomePageSchema,
		`${env.NEXT_PUBLIC_API_URL}/home-page?${homePageQuery(locale)}`
	);
	seo.metaSocial;
	const favicon = seo.metaImage?.url
		? constructImageLink(seo.metaImage.url)
		: undefined;

	return {
		title: `${seo.metaTitle} | Adebayo Ademon`,
		keywords: seo.keywords,
		description: seo.metaDescription,
		icons: favicon,
		twitter: {
			title: '',
			description: '',
			images: '',
		},
		openGraph: {
			type: 'website',
			title: '',
			description: '',
			images: '',
			// TODO: Convert the open graph meta tags from a list to an object but before that make sure the response
			// from Strapi contains the image for the open graph meta tags
		},
		alternates: {
			canonical: '/',
			languages: {
				en: 'en',
				fr: 'fr',
				tr: 'fr',
			},
		},
		manifest: '',
		robots: '',
		referrer: 'no-referrer',
	};
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
