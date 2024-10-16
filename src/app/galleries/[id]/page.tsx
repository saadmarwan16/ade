import BackgroundWrapper from '@/app/components/BackgroundWrapper';
import Hero from '@/app/components/galleries/[id]/Hero';
import Photos from '@/app/components/galleries/[id]/Photos';
import { FunctionComponent } from 'react';

interface GalleryDetailsPageProps {}

const GalleryDetailsPage: FunctionComponent<GalleryDetailsPageProps> = () => {
	return (
		<BackgroundWrapper>
			<div className='flex w-full flex-col gap-8 sm:gap-10 sm:py-10 md:gap-12 lg:items-center lg:gap-16'>
				<Hero />
				<Photos />
			</div>
		</BackgroundWrapper>
	);
};

export async function generateStaticParams() {
	return [{ id: '123' }];
}

export default GalleryDetailsPage;
