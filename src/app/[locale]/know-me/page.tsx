import BackgroundWrapper from '@/app/components/BackgroundWrapper';
import Content from '@/app/components/know-me/Content';
import Hero from '@/app/components/know-me/Hero';
import ReachOut from '@/app/components/know-me/ReachOut';
import { FunctionComponent } from 'react';

interface KnowMePageProps {}

const KnowMePage: FunctionComponent<KnowMePageProps> = () => {
	return (
		<BackgroundWrapper>
			<div className='flex w-full max-w-[1400px] flex-col gap-8 p-5 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 lg:items-center lg:gap-16'>
				<Hero />
				<Content />
				<ReachOut />
			</div>
		</BackgroundWrapper>
	);
};

export default KnowMePage;
