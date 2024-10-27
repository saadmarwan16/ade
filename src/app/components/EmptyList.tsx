import { FunctionComponent } from 'react';
import { PiEmptyBold } from 'react-icons/pi';

interface EmptyListProps {
	message: string;
}

const EmptyList: FunctionComponent<EmptyListProps> = ({ message }) => {
	return (
		<div className='flex flex-col items-center gap-4 lg:gap-6 py-8 sm:py-12 md:py-16 lg:py-20'>
			<PiEmptyBold className='text-9xl text-red-800 sm:text-[9rem] md:text-[10rem] lg:text-[12rem]' />
			<h2 className='text-2xl md:text-3xl lg:text-4xl'>{message}</h2>
		</div>
	);
};

export default EmptyList;
