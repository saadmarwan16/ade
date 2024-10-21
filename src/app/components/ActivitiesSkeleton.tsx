import { FunctionComponent } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const ActivitiesSkeleton: FunctionComponent = async () => {
	return (
		<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{[...Array(24)].map((_, idx) => (
				<Skeleton key={idx} className='aspect-video' />
			))}
		</div>
	);
};

export default ActivitiesSkeleton;
