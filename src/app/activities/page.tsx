import { FunctionComponent } from 'react';
import { Separator } from '@/components/ui/separator';
import HeroTitle from '../components/activities/HeroTitle';
import Featured from '../components/activities/Featured';
import Tabs from '../components/activities/Tabs';
import Activities from '../components/activities/Activities';
import AceternityButton from '@/components/ui/aceternity-button';
import BackgroundWrapper from '../components/BackgroundWrapper';

interface ActivitiesPageProps {}

const ActivitiesPage: FunctionComponent<ActivitiesPageProps> = () => {
	return (
		<BackgroundWrapper>
			<div className='flex max-w-[1400px] flex-col gap-8 p-5 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 lg:gap-16'>
				<HeroTitle />
				<Featured />
				<Separator className='bg-gray-400' />
				<Tabs />
				<Activities />
				<AceternityButton text='See more' className='sm:place-self-end' />
			</div>
		</BackgroundWrapper>
	);
};

export default ActivitiesPage;
