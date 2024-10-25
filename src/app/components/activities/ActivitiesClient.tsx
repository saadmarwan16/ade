'use client';

import { FunctionComponent } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { constructImageLink } from '@/lib/constructLink';
import { ActivitiesSchema, TActivities } from '@/types/activities';
import AceternityButton from '@/components/ui/aceternity-button';
import { useTranslations } from 'next-intl';
import useSWRInfinite from 'swr/infinite';
import { env } from '@/env';
import { activitiesQuery } from '@/queries/activities';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { Skeleton } from '@/components/ui/skeleton';

interface ActivitiesClientProps {
	activities: TActivities;
	locale: string;
	category: string;
}

const ActivitiesClient: FunctionComponent<ActivitiesClientProps> = ({
	activities: { data },
	locale,
	category,
}) => {
	const t = useTranslations('ActivitiesPage');
	const {
		data: activities,
		size,
		setSize,
		isLoading,
		isValidating,
	} = useSWRInfinite(
		(pageIdx) => {
			return `${env.NEXT_PUBLIC_API_URL}/activities?${activitiesQuery(locale, pageIdx + 1, category)}`;
		},
		async (url) => {
			const { data } = await fetchWithZod(ActivitiesSchema, url);

			return data;
		},
		{
			fallbackData: [data],
			revalidateOnFocus: false,
			suspense: true,
		}
	);

	return (
		<>
			<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{activities?.map((page) => (
					<>
						{page.map((activity) => (
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
					</>
				))}
				{isValidating && (
					<>
						{[...Array(12)].map((_, idx) => (
							<Skeleton key={idx} className='aspect-video' />
						))}
					</>
				)}
			</div>
			<AceternityButton
				text={t('see-more-button')}
				className='sm:place-self-end'
				disabled={
					isLoading || isValidating || activities?.[size - 1]?.length === 0
				}
				onClick={() => setSize(size + 1)}
			/>
		</>
	);
};

export default ActivitiesClient;
