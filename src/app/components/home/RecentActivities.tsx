import { FunctionComponent } from 'react';
import Activities from '../activities/Activities';
import AceternityButton from '@/components/ui/aceternity-button';
import { useTranslations } from 'next-intl';
import { Routes } from '@/lib/routes';

interface RecentActivitiesProps {}

const RecentActivities: FunctionComponent<RecentActivitiesProps> = () => {
	const t = useTranslations('HomePage');

	return (
		<div className='flex flex-col gap-6'>
			<h3 className='text-2xl font-medium sm:text-3xl lg:text-4xl'>
				{t('recent-activities')}
			</h3>
			<Activities />
			<AceternityButton
				text={t('view-all-button')}
				className='sm:place-self-end'
				link={Routes.ACTIVITIES}
			/>
		</div>
	);
};

export default RecentActivities;
