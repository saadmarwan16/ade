'use client';

import { FunctionComponent } from 'react';
import qs from 'qs';
import Header from './components/Header';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import HeroName from './components/HeroName';

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
		<>
			<Header />
			<AuroraBackground>
				<motion.div
					initial={{ opacity: 0.0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					className='relative flex h-full w-full flex-col gap-4 px-36 py-24'
				>
					<div className='h-full w-full lg:py-16 xl:py-24 lg:px-24 xl:px-32'>
						<HeroName />
					</div>
				</motion.div>
			</AuroraBackground>
		</>
	);
};

export default Home;
