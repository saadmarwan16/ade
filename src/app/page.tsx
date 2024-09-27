'use client';

import { FunctionComponent } from 'react';
import qs from 'qs';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import Hero from './components/home/Hero';
import Projects from './components/home/Projects';
import RecentActivities from './components/home/RecentActivities';
import MeAndPartners from './components/home/MeAndPartners';

interface HomeProps {
	searchParams: {
		sort?: string;
		filter?: string;
	};
}

const Home: FunctionComponent<HomeProps> = ({ searchParams }) => {
	let filter: boolean | undefined = undefined;
	if (searchParams.filter === 'completed') filter = true;
	if (searchParams.filter === 'uncompleted') filter = false;

	const query = qs.stringify(
		{
			sort: searchParams.sort,
			filters: {
				completed: {
					$eq: filter,
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	return (
		<AuroraBackground className='h-full'>
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}
				className='relative flex w-full justify-center'
			>
				<div className='flex w-full max-w-[1400px] flex-col gap-8 p-5 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 lg:gap-16'>
					<Hero />
					<MeAndPartners />
					<Projects />
					<RecentActivities />
				</div>
			</motion.div>
		</AuroraBackground>
	);
};

export default Home;
