'use client';

import { FunctionComponent, useState } from 'react';
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

import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';

import photos from '@/lib/photos';
import Lightbox from '../../LightBox';

interface PhotosProps {}

const Photos: FunctionComponent<PhotosProps> = () => {
	const [index, setIndex] = useState(-1);

	return (
		<div className='md:-mb-18 -mx-5 -mb-11 bg-gray-200/40 px-5 py-8 backdrop-blur-sm sm:-mx-8 sm:-mb-16 sm:px-8 md:gap-8 lg:w-screen lg:py-12 xl:py-16'>
			<div className='mx-auto flex flex-col gap-5 xl:max-w-[1336px]'>
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
								21 photos
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<RowsPhotoAlbum
					photos={photos}
					targetRowHeight={300}
					onClick={({ index }) => setIndex(index)}
					componentsProps={{
						image: {
							style: { borderRadius: '0.4rem' },
						},
					}}
				/>

				{index >= 0 && (
					<Lightbox
						slides={photos}
						open={index >= 0}
						index={index}
						close={() => setIndex(-1)}
					/>
				)}
			</div>
		</div>
	);
};

export default Photos;
