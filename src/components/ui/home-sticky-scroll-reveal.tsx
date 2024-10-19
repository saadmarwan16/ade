'use client';

import React, { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Pathnames } from '@/i18n/routing';
import ExternalAceternityButton from './external-aceternity-button';

export const HomeStickyScroll = ({
	content,
	contentClassName,
}: {
	content: {
		category: string;
		title: string;
		link: string | null;
		description: string;
		content?: React.ReactNode | any;
	}[];
	contentClassName?: string;
}) => {
	const t = useTranslations('HomePage');
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		// uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
		// target: ref,
		container: ref,
		offset: ['start start', 'end start'],
	});
	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce(
			(acc, breakpoint, index) => {
				const distance = Math.abs(latest - breakpoint);
				if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
					return index;
				}
				return acc;
			},
			0
		);
		setActiveCard(closestBreakpointIndex);
	});

	return (
		<motion.div
			className='scrollbar-hidden relative -mx-8 flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md !bg-gray-200/40 p-10 backdrop-blur-lg 2xl:mx-0'
			ref={ref}
		>
			<div className='div relative flex max-w-xl grow items-start px-4'>
				<div>
					{content.map((item, index) => (
						<div key={item.title + index} className='my-20'>
							<span className='font-medium text-blue-600 sm:text-lg md:text-xl'>
								{item.category}
							</span>
							<motion.h2
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className='mt-1 text-2xl font-bold text-black'
							>
								{item.title}
							</motion.h2>
							<motion.p
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className='my-6 max-w-md text-lg text-gray-600'
							>
								{item.description}
							</motion.p>
							{item.link && (
								<ExternalAceternityButton
									text={t('learn-more-button')}
									link={item.link}
								/>
							)}
						</div>
					))}
					<div className='h-40' />
				</div>
			</div>
			<div
				className={cn(
					'sticky top-10 hidden h-72 w-72 overflow-hidden rounded-md lg:block',
					contentClassName
				)}
			>
				{content[activeCard].content ?? null}
			</div>
		</motion.div>
	);
};
