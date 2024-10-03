import Hero from '@/app/components/galleries/[id]/Hero';
import Photos from '@/app/components/galleries/[id]/Photos';
import { FunctionComponent } from 'react';

interface GalleryDetailsPageProps {}

const GalleryDetailsPage: FunctionComponent<GalleryDetailsPageProps> = () => {
	return (
		<div className='flex w-full max-w-[1400px] flex-col gap-8 p-5 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 lg:items-center lg:gap-16'>
			<Hero />
			<Photos />
		</div>
	);
};

export default GalleryDetailsPage;
