'use client';

import { useRouter } from '@/i18n/routing';
import { Category } from '@/lib/capitalizeCategory';
import { useTranslations } from 'next-intl';
import { FunctionComponent } from 'react';

interface TabsProps {
	category: Category;
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
				className={`cursor-pointer rounded-md border px-4 py-1 ${category === 'Personal' ? 'bg-gray-700 text-white' : 'border-gray-700 bg-transparent'}`}
				onClick={() =>
					router.push(
						{
							pathname: '/activities',
							query: { category: 'personal' },
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
				className={`cursor-pointer rounded-md border px-4 py-1 ${category === 'Social' ? 'bg-gray-700 text-white' : 'border-gray-700 bg-transparent'}`}
				onClick={() =>
					router.push(
						{
							pathname: '/activities',
							query: { category: 'social' },
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
				className={`cursor-pointer rounded-md border px-4 py-1 ${category === 'Political' ? 'bg-gray-700 text-white' : 'border-gray-700 bg-transparent'}`}
				onClick={() =>
					router.push(
						{
							pathname: '/activities',
							query: { category: 'political' },
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
				className={`cursor-pointer rounded-md border px-4 py-1 ${category === 'Professional' ? 'bg-gray-700 text-white' : 'border-gray-700 bg-transparent'}`}
				onClick={() =>
					router.push(
						{
							pathname: '/activities',
							query: { category: 'professional' },
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
