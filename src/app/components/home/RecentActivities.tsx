import { FunctionComponent } from 'react';
import { Button } from '@/components/ui/button';
import Activities from '../activities/Activities';

interface RecentActivitiesProps {}

const RecentActivities: FunctionComponent<RecentActivitiesProps> = () => {
	return (
		<div className='flex flex-col gap-6'>
			<h3 className='text-2xl font-medium sm:text-3xl lg:text-4xl'>
				Recent Activities
			</h3>
			<Activities />
			<Button className='place-self-end'>View all</Button>
		</div>
	);
};

export default RecentActivities;
