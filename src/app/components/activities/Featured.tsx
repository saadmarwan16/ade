import { FunctionComponent } from 'react';
import Image from 'next/image';
import { Routes } from '@/lib/routes';
import Link from 'next/link';

interface FeaturedProps {}

const Featured: FunctionComponent<FeaturedProps> = () => {
	return (
		<Link
			href={Routes.ACTIVITY_DETAILS('123')}
			className='flex flex-col gap-2 hover:text-blue-700'
		>
			<div className='relative aspect-video rounded-tr-[3rem] sm:rounded-tr-[4rem] md:rounded-tr-[5rem] lg:aspect-auto lg:h-[600px] lg:rounded-tr-[6rem] xl:h-[700px]'>
				<Image
					src='/activity.png'
					alt='Meeting with the CEO of Cerrahi Hastane'
					fill
					className='rounded-tr-[3rem] sm:rounded-tr-[4rem] md:rounded-tr-[5rem] lg:rounded-tr-[6rem]'
				/>
			</div>
			<h3 className='text-xl font-medium sm:text-2xl lg:text-3xl'>
				Meeting with the CEO of Cerrahi Hastane
			</h3>
		</Link>
	);
};

export default Featured;
