'use client';

import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { FunctionComponent } from 'react';

interface TabsProps {
	category: string;
}

const Tabs: FunctionComponent<TabsProps> = ({ category }) => {
	const t = useTranslations('ActivitiesPage');
	const router = useRouter();

	return (
		<div className='flex flex-wrap gap-3 sm:gap-4 sm:text-lg'>
			<div
				className={`cursor-pointer rounded-md border px-4 py-1 ${category === 'All' ? 'bg-gray-700 text-white' : 'border-gray-700 bg-transparent'}`}
				onClick={() => router.push('/activities', { scroll: false })}
			>
				{t('all-tab')}
			</div>
			<div
				className={`cursor-pointer rounded-md border px-4 py-1 ${category === t('personal-tab') ? 'bg-gray-700 text-white' : 'border-gray-700 bg-transparent'}`}
				onClick={() =>
					router.push(
						{
							pathname: '/activities',
							query: { category: t('personal-tab') },
						},
						{
							scroll: false,
						}
					)
				}
			>
				{t('personal-tab')}
			</div>
			<div
				className={`cursor-pointer rounded-md border px-4 py-1 ${category === t('social-tab') ? 'bg-gray-700 text-white' : 'border-gray-700 bg-transparent'}`}
				onClick={() =>
					router.push(
						{
							pathname: '/activities',
							query: { category: t('social-tab') },
						},
						{
							scroll: false,
						}
					)
				}
			>
				{t('social-tab')}
			</div>
			<div
				className={`cursor-pointer rounded-md border px-4 py-1 ${category === t('political-tab') ? 'bg-gray-700 text-white' : 'border-gray-700 bg-transparent'}`}
				onClick={() =>
					router.push(
						{
							pathname: '/activities',
							query: { category: t('political-tab') },
						},
						{
							scroll: false,
						}
					)
				}
			>
				{t('political-tab')}
			</div>
			<div
				className={`cursor-pointer rounded-md border px-4 py-1 ${category === t('professional-tab') ? 'bg-gray-700 text-white' : 'border-gray-700 bg-transparent'}`}
				onClick={() =>
					router.push(
						{
							pathname: '/activities',
							query: { category: t('professional-tab') },
						},
						{
							scroll: false,
						}
					)
				}
			>
				{t('professional-tab')}
			</div>
		</div>
	);
};

export default Tabs;
