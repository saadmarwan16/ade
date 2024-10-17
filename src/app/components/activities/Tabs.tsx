import { useTranslations } from 'next-intl';
import { FunctionComponent } from 'react';

interface TabsProps {}

const Tabs: FunctionComponent<TabsProps> = () => {
	const t = useTranslations('ActivitiesPage');

	return (
		<div className='flex flex-wrap gap-3 sm:gap-4 sm:text-lg'>
			<div className='cursor-pointer rounded-md bg-gray-700 px-4 py-1 text-white'>
				{t('all-tab')}
			</div>
			<div className='cursor-pointer rounded-md border border-gray-700 bg-transparent px-4 py-1'>
				{t('personal-tab')}
			</div>
			<div className='cursor-pointer rounded-md border border-gray-700 bg-transparent px-4 py-1'>
				{t('social-tab')}
			</div>
			<div className='cursor-pointer rounded-md border border-gray-700 bg-transparent px-4 py-1'>
				{t('political-tab')}
			</div>
			<div className='cursor-pointer rounded-md border border-gray-700 bg-transparent px-4 py-1'>
				{t('professional-tab')}
			</div>
		</div>
	);
};

export default Tabs;
