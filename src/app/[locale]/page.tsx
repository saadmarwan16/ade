import { FunctionComponent } from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import Hero from '../components/home/Hero';
import MeAndPartners from '../components/home/MeAndPartners';
import Projects from '../components/home/Projects';
import RecentActivities from '../components/home/RecentActivities';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

interface HomeProps {
	params: {
		locale: string;
	};
}

export async function generateMetadata({ params: { locale } }: HomeProps) {
	// const t = await getTranslations({
	// 	locale: locale,
	// 	namespace: 'ActivitiesPage',
	// });

	return {
		locale: locale,
	};
}

const Home: FunctionComponent<HomeProps> = ({ params: { locale } }) => {
	unstable_setRequestLocale(locale);
	// throw new Error('Not implemented');

	return (
		<BackgroundWrapper>
			<div className='flex w-full max-w-[1400px] flex-col gap-8 p-5 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 lg:gap-16'>
				<Hero />
				<MeAndPartners />
				<Projects />
				<RecentActivities />
			</div>
		</BackgroundWrapper>
	);
};

export default Home;
