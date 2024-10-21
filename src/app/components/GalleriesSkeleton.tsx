import { FunctionComponent } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const GalleriesSkeleton: FunctionComponent = async () => {
	return (
		<div className='bg-gray-200/40 px-5 py-8 backdrop-blur-sm sm:px-8 lg:w-full lg:py-12 xl:py-16'>
			<div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:max-w-[1336px] xl:gap-8'>
				{[...Array(24)].map((_, idx) => (
					<Skeleton key={idx} className='aspect-video' />
				))}
			</div>
		</div>
	);
};

export default GalleriesSkeleton;
