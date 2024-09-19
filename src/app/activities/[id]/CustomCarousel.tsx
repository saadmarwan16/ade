'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface CustomCarouselProps {}

const CustomCarousel: FunctionComponent<CustomCarouselProps> = () => {
	return (
		<Carousel showThumbs={false} swipeable className='mt-4 md:mt-6 lg:mt-8'>
			{[...Array(6)].map((_, index) => (
				<div key={index} className='aspect-video'>
					<Image
						src='/activity.png'
						alt={`Meeting the CEO of Cerrahi Hastane #${index + 1}`}
						className='rounded-lg'
						fill
					/>
				</div>
			))}
		</Carousel>
	);
};

export default CustomCarousel;
