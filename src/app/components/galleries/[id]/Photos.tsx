'use client';

import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { Routes } from '@/lib/routes';
import Link from 'next/link';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Photo from './Photo';
// import sizeOf from 'image-size';
// import ImageViewer from 'react-simple-image-viewer';

interface PhotosProps {}

const Photos: FunctionComponent<PhotosProps> = () => {
	const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

	// const [currentImage, setCurrentImage] = useState(0);
	// const [isViewerOpen, setIsViewerOpen] = useState(false);
	// const images = [
	// 	'https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png',
	// 	'https://logos-world.net/wp-content/uploads/2020/09/Wikipedia-Logo.png',
	// 	'https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png',
	// 	'https://logos-world.net/wp-content/uploads/2020/09/Wikipedia-Logo.png',
	// ];

	// const openImageViewer = useCallback((index: number) => {
	// 	setCurrentImage(index);
	// 	setIsViewerOpen(true);
	// }, []);

	// const closeImageViewer = () => {
	// 	setCurrentImage(0);
	// 	setIsViewerOpen(false);
	// };
	// const dimensions = sizeOf('https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png');
	// console.log(dimensions.width, dimensions.height);

	return (
		<>
			<div className='md:-mb-18 -mx-5 -mb-11 flex flex-col gap-5 bg-gray-200/40 px-5 py-8 backdrop-blur-sm sm:-mx-8 sm:-mb-16 sm:px-8 md:gap-8 lg:w-screen lg:py-12 xl:py-16'>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link
									href={Routes.GALLERY}
									className='text-base sm:text-xl lg:text-2xl'
								>
									Galleries
								</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage className='text-base lg:text-lg'>
								92 photos
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<div className='mx-auto grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-[1336px] xl:gap-3'>
					{[...Array(10)].map((_, idx) => (
						<Photo
							key={idx}
							src='https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png'
						/>
					))}
				</div>
			</div>

			{/* {isViewerOpen && (
				<ImageViewer
					src={images}
					currentIndex={currentImage}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageViewer}
				/>
			)} */}
		</>
	);
};

export default Photos;
