import { FunctionComponent } from 'react';
import Hero from '../components/galleries/Hero';
import Galleries from '../components/galleries/Galleries';
import BackgroundWrapper from '../components/BackgroundWrapper';

interface GalleriesPageProps {}

const GalleriesPage: FunctionComponent<GalleriesPageProps> = () => {
	return (
		<BackgroundWrapper>
			<div className='flex w-full flex-col gap-8 sm:gap-10 sm:py-10 md:gap-12 lg:items-center lg:gap-16'>
				<Hero />
				<Galleries />
			</div>
		</BackgroundWrapper>
	);
};

export default GalleriesPage;
