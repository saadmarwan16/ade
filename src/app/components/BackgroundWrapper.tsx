'use client';

import { FunctionComponent, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';

const BackgroundWrapper: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
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
				{children}
			</motion.div>
		</AuroraBackground>
	);
};

export default BackgroundWrapper;
