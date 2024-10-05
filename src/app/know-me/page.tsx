import { FunctionComponent } from 'react';
import Hero from '../components/know-me/Hero';
import Content from '../components/know-me/Content';
import ReachOut from '../components/know-me/ReachOut';
import BackgroundWrapper from '../components/BackgroundWrapper';

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
