import { FunctionComponent } from 'react';
import Hero from './components/home/Hero';
import Projects from './components/home/Projects';
import RecentActivities from './components/home/RecentActivities';
import MeAndPartners from './components/home/MeAndPartners';
import BackgroundWrapper from './components/BackgroundWrapper';

const Home: FunctionComponent = () => {
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
