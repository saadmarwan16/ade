'use client';

import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import Hero from '../components/know-me/Hero';
import Content from '../components/know-me/Content';
import ReachOut from '../components/know-me/ReachOut';

interface KnowMePageProps {}

const KnowMePage: FunctionComponent<KnowMePageProps> = () => {
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
				<div className='flex w-full max-w-[1400px] flex-col gap-8 p-5 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 lg:items-center lg:gap-16'>
					<Hero />
					<Content />
					<ReachOut />
				</div>
			</motion.div>
		</AuroraBackground>
	);
};

export default KnowMePage;
