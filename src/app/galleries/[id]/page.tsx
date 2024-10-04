'use client';

import Hero from '@/app/components/galleries/[id]/Hero';
import Photos from '@/app/components/galleries/[id]/Photos';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';

interface GalleryDetailsPageProps {}

const GalleryDetailsPage: FunctionComponent<GalleryDetailsPageProps> = () => {
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
					<Photos />
				</div>
			</motion.div>
		</AuroraBackground>
	);
};

export default GalleryDetailsPage;
