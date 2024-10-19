import { TGalleryDetailsImages } from '@/types/gallery_details';
import type { Photo } from 'react-photo-album';
import { constructImageLink } from './constructLink';

export const getPhotos = (title: string, images: TGalleryDetailsImages) => {
	return images.map((image, idx) => {
		return {
			src: constructImageLink(image.url),
			width: image.width,
			height: image.height,
			alt: `Image #${idx + 1} of ${title}`,
		};
	}) as Photo[];
};
