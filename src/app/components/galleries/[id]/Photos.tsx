'use client';

import { FunctionComponent, useState } from 'react';
import { Routes } from '@/lib/routes';
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

import { getPhotos } from '@/lib/getPhotos';
import Lightbox from '../../LightBox';
import RenderNextImage from './RenderNextImage';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { TGalleryDetailsImages } from '@/types/gallery_details';

interface PhotosProps {
	title: string;
	images: TGalleryDetailsImages;
}

const Photos: FunctionComponent<PhotosProps> = ({ title, images }) => {
	const t = useTranslations('GalleryDetailsPage');
	const [index, setIndex] = useState(-1);
	const photos = getPhotos(title, images);

	return (
		<div className='md:-mb-18 -mb-11 bg-gray-200/40 px-5 py-8 backdrop-blur-sm sm:px-8 md:gap-8 lg:w-full lg:py-12 xl:py-16'>
			<div className='mx-auto flex flex-col gap-5 xl:max-w-[1336px]'>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link
									href='/galleries'
									className='text-base sm:text-xl lg:text-2xl'
								>
									{t('galleries-link')}
								</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage className='text-base lg:text-lg'>
								{photos.length} {t('photos')}
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<RowsPhotoAlbum
					photos={photos}
					targetRowHeight={300}
					onClick={({ index }) => setIndex(index)}
					render={{ image: RenderNextImage }}
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
