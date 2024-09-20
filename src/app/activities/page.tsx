'use client';

import { FunctionComponent } from 'react';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import HeroTitle from '../components/activities/HeroTitle';
import Featured from '../components/activities/Featured';
import Tabs from '../components/activities/Tabs';
import Activities from '../components/activities/Activities';
import { Button } from '@/components/ui/button';

interface ActivitiesPageProps {}

const ActivitiesPage: FunctionComponent<ActivitiesPageProps> = () => {
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
				<div className='flex max-w-[1400px] flex-col gap-8 p-5 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 lg:gap-16'>
					<HeroTitle />
					<Featured />
					<Separator className='bg-gray-400' />
					<Tabs />
					<Activities />
					<Button className='place-self-end' size='lg'>
						See more
					</Button>
				</div>
			</motion.div>
		</AuroraBackground>
	);
};

export default ActivitiesPage;
