import { FunctionComponent } from 'react';
import { Separator } from '@/components/ui/separator';
import BackgroundWrapper from '@/app/components/BackgroundWrapper';
import HeroTitle from '@/app/components/activities/HeroTitle';
import Featured from '@/app/components/activities/Featured';
import Tabs from '@/app/components/activities/Tabs';
import Activities from '@/app/components/activities/Activities';
import AceternityButton from '@/components/ui/aceternity-button';
import { useTranslations } from 'next-intl';

interface ActivitiesPageProps {}

const ActivitiesPage: FunctionComponent<ActivitiesPageProps> = () => {
	const t = useTranslations('ActivitiesPage');

	return (
		<BackgroundWrapper>
			<div className='flex max-w-[1400px] flex-col gap-8 p-5 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 lg:gap-16'>
				<HeroTitle />
				<Featured />
				<Separator className='bg-gray-400' />
				<Tabs />
				<Activities />
				<AceternityButton
					text={t('see-more-button')}
					className='sm:place-self-end'
				/>
			</div>
		</BackgroundWrapper>
	);
};

export default ActivitiesPage;
