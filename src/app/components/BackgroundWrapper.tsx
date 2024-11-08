'use client';

import { FunctionComponent, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';

const BackgroundWrapper: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	return (
		<>
			<AuroraBackground className='hidden h-full lg:block'>
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
			<div className='block min-h-full lg:hidden'>{children}</div>
		</>
	);
};

export default BackgroundWrapper;
