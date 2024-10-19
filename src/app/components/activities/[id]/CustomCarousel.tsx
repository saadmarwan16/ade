'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { TActivityDetailsImages } from '@/types/activity_details';
import { constructImageLink } from '@/lib/constructLink';

interface CustomCarouselProps {
	title: string;
	images: TActivityDetailsImages;
}

const CustomCarousel: FunctionComponent<CustomCarouselProps> = ({
	title,
	images,
}) => {
	return (
		<Carousel showThumbs={false} swipeable className='mt-4 md:mt-6 lg:mt-8'>
			{images.map((image, idx) => (
				<div key={image.documentId} className='aspect-video'>
					<Image
						src={constructImageLink(image.url)}
						alt={`Image #${idx + 1} of ${title}`}
						className='rounded-lg'
						fill
					/>
				</div>
			))}
		</Carousel>
	);
};

export default CustomCarousel;
