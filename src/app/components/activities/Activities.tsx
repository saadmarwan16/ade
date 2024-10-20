import { FunctionComponent } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { constructImageLink } from '@/lib/constructLink';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { ActivitiesSchema } from '@/types/activities';
import { env } from '@/env';
import { activitiesQuery } from '@/queries/activities';

interface ActivitiesProps {
	locale: string;
}

const Activities: FunctionComponent<ActivitiesProps> = async ({ locale }) => {
	const { data: activities } = await fetchWithZod(
		ActivitiesSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities?${activitiesQuery(locale)}`
	);

	return (
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
	);
};

export default Activities;
