import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Routes } from '@/lib/routes';

interface ActivitiesProps {}

const Activities: FunctionComponent<ActivitiesProps> = () => {
	return (
		<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{[...Array(10)].map((_, index) => (
				<Link
					href={Routes.ACTIVITY_DETAILS('456')}
					key={index}
					className='flex flex-col gap-2 duration-500 hover:scale-[1.03] hover:text-blue-900'
				>
					<div className='relative aspect-video rounded-lg'>
						<Image
							src='/activity.png'
							alt="We've just bagged an Honourable Mention from Awwwards"
							fill
							className='rounded-lg'
						/>
					</div>
					<h4 className='line-clamp-2 text-base sm:text-lg'>
						We&apos;ve just bagged an Honourable Mention from Awwwards
					</h4>
				</Link>
			))}
		</div>
	);
};

export default Activities;
