import Image from 'next/image';
import { RenderImageContext, RenderImageProps } from 'react-photo-album';
import 'react-photo-album/rows.css';

const RenderNextImage = (
	{ alt = '', title, sizes }: RenderImageProps,
	{ photo, width, height }: RenderImageContext
) => {
	return (
		<div
			style={{
				width: '100%',
				position: 'relative',
				aspectRatio: `${width} / ${height}`,
			}}
		>
			<Image
				fill
				src={photo}
				alt={alt}
				title={title}
				sizes={sizes}
                className='rounded-md md:rounded-lg'
				placeholder={'blurDataURL' in photo ? 'blur' : undefined}
			/>
		</div>
	);
};

export default RenderNextImage;
