import { FunctionComponent } from 'react';
import Image from 'next/image';
import AceternityButton from '@/components/ui/aceternity-button';
import { Routes } from '@/lib/routes';
import { TActivites } from '@/types/home_page';
import { Link } from '@/i18n/routing';
import { constructImageLink } from '@/lib/constructLink';
import { getTranslations } from 'next-intl/server';

interface RecentActivitiesProps {
	activities: TActivites;
}

const RecentActivities: FunctionComponent<RecentActivitiesProps> = async ({
	activities,
}) => {
	const t = await getTranslations('HomePage');

	return (
		<div className='flex flex-col gap-6'>
			<h3 className='text-2xl font-medium sm:text-3xl lg:text-4xl'>
				{t('recent-activities')}
			</h3>
			<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{activities.map((activity) => (
					<Link
						href={{
							pathname: '/activities/[slug]',
							params: { slug: activity.slug },
						}}
						key={activity.documentId}
						className='flex flex-col gap-2 duration-500 hover:scale-[1.03] hover:text-blue-900'
					>
						<div className='relative aspect-video rounded-lg'>
							<Image
								src={constructImageLink(activity.thumbnail.url)}
								alt={`Image of ${activity.title}`}
								fill
								className='rounded-lg'
							/>
						</div>
						<h4 className='line-clamp-2 text-base sm:text-lg'>
							{activity.title}
						</h4>
					</Link>
				))}
			</div>
			<AceternityButton
				text={t('view-all-button')}
				className='sm:place-self-end'
				link={Routes.ACTIVITIES}
			/>
		</div>
	);
};

export default RecentActivities;
