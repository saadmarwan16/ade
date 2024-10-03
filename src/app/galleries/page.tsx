'use client';

import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import Hero from '../components/galleries/Hero';
import Galleries from '../components/galleries/Galleries';

interface GalleriesPageProps {}

const GalleriesPage: FunctionComponent<GalleriesPageProps> = () => {
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
					<Galleries />
				</div>
			</motion.div>
		</AuroraBackground>
	);
};

export default GalleriesPage;
