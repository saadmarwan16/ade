import NextImage from 'next/image';
import { FunctionComponent, useEffect, useState } from 'react';

interface PhotoProps {
	src: string;
}

const Photo: FunctionComponent<PhotoProps> = ({ src }) => {
	const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
	console.log(dimensions);

	useEffect(() => {
		const img = new Image();
		img.src =
			'https://media.geeksforgeeks.org/wp-content/uploads/20240701151251/react-tutorial-copy-2.webp';
		img.onload = () => {
			setDimensions({ height: img.height, width: img.width });
		};
	}, [src]);

	return (
		<div
			className='relative aspect-video cursor-pointer rounded-md'
			// onClick={() => openImageViewer(idx)}
		>
			<NextImage alt='Title' src='/me-1.jpg' fill className='rounded-md' />
			<div className='absolute bottom-0 left-0 right-0 top-0 rounded-md bg-black/0 duration-300 hover:bg-black/30'></div>
		</div>
	);
};

export default Photo;
