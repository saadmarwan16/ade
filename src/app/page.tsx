'use client';

import { FunctionComponent } from 'react';
import qs from 'qs';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import HeroName from './components/HeroName';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Routes } from '@/lib/routes';

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
					<div className='flex w-full flex-col text-6xl font-medium'>
						<span>I am</span>
						<div>
							<span>A</span>
							<span>d</span>
							<span>e</span>
							<span>b</span>
							<span>a</span>
							<span>y</span>
							<span className='inline lg:hidden'>o</span>
						</div>
						<div>
							<span>A</span>
							<span>d</span>
							<span>e</span>
							<span>m</span>
							<span className='inline lg:hidden'>o</span>
							<span>n</span>
						</div>
					</div>

					<div className='-mx-5 overflow-hidden'>
						<div className='group flex w-fit overflow-hidden'>
							<div className='flex w-screen animate-loop-scroll space-x-4 group-hover:paused'>
								<div className='relative aspect-square flex-shrink-0 basis-12 rounded-md'>
									<Image
										alt='logo'
										src='/logos/facebook.webp'
										fill
										className='rounded-md'
									/>
								</div>
								<div className='relative aspect-square flex-shrink-0 basis-12 rounded-md'>
									<Image
										alt='logo'
										src='/logos/google.jpg'
										fill
										className='rounded-md'
									/>
								</div>
								<div className='relative aspect-square flex-shrink-0 basis-12 rounded-md'>
									<Image
										alt='logo'
										src='/logos/instagram.png'
										fill
										className='rounded-md'
									/>
								</div>
								<div className='relative aspect-square flex-shrink-0 basis-12 rounded-md'>
									<Image
										alt='logo'
										src='/logos/linkedin.png'
										fill
										className='rounded-md'
									/>
								</div>
								<div className='relative aspect-square flex-shrink-0 basis-12 rounded-md'>
									<Image
										alt='logo'
										src='/logos/x.avif'
										fill
										className='rounded-md'
									/>
								</div>
							</div>
							<div
								className='flex w-screen animate-loop-scroll space-x-4 group-hover:paused'
								aria-hidden
							>
								<div className='relative aspect-square flex-shrink-0 basis-12 rounded-md'>
									<Image
										alt='logo'
										src='/logos/facebook.webp'
										fill
										className='rounded-md'
									/>
								</div>
								<div className='relative aspect-square flex-shrink-0 basis-12 rounded-md'>
									<Image
										alt='logo'
										src='/logos/google.jpg'
										fill
										className='rounded-md'
									/>
								</div>
								<div className='relative aspect-square flex-shrink-0 basis-12 rounded-md'>
									<Image
										alt='logo'
										src='/logos/instagram.png'
										fill
										className='rounded-md'
									/>
								</div>
								<div className='relative aspect-square flex-shrink-0 basis-12 rounded-md'>
									<Image
										alt='logo'
										src='/logos/linkedin.png'
										fill
										className='rounded-md'
									/>
								</div>
								<div className='relative aspect-square flex-shrink-0 basis-12 rounded-md'>
									<Image
										alt='logo'
										src='/logos/x.avif'
										fill
										className='rounded-md'
									/>
								</div>
							</div>
						</div>
					</div>

					<div className='flex w-full flex-col items-end gap-2'>
						<p className='text-lg'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
							cupiditate nostrum.
						</p>

						<Link
							href={Routes.KNOW_ME}
							className={buttonVariants({ variant: 'default' })}
						>
							Learn more
						</Link>
					</div>
				</div>
			</motion.div>
		</AuroraBackground>
		// <AuroraBackground>
		// 	<motion.div
		// 		initial={{ opacity: 0.0, y: 40 }}
		// 		whileInView={{ opacity: 1, y: 0 }}
		// 		transition={{
		// 			delay: 0.3,
		// 			duration: 0.8,
		// 			ease: 'easeInOut',
		// 		}}
		// 		className='relative flex h-full w-full flex-col gap-4 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-32 xl:px-40'
		// 	>
		// 		<div className='h-full w-full pt-20 sm:pt-16 md:pt-12 lg:py-16 xl:py-24'>
		// 			<HeroName />
		// 		</div>
		// 	</motion.div>
		// </AuroraBackground>
	);
};

export default Home;
