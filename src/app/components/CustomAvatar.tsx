import { Routes } from '@/lib/routes';
import { FunctionComponent } from 'react';
import HeaderName from './HeaderName';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

interface CustomAvatarProps {}

const CustomAvatar: FunctionComponent<CustomAvatarProps> = () => {
	return (
		<Link
			href={Routes.HOME}
			className='flex w-fit items-center gap-2 duration-500 hover:scale-105 md:gap-4'
		>
			<div className='relative aspect-square w-12 rounded-full md:w-16'>
				<Image
					src='https://github.com/shadcn.png'
					alt='Avatar 1'
					className='rounded-full'
					fill
				/>
			</div>

			<HeaderName />
		</Link>
	);
};

export default CustomAvatar;
