import { Routes } from '@/lib/routes';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Avatar } from '@radix-ui/react-avatar';
import HeaderName from './HeaderName';

interface CustomAvatarProps {}

const CustomAvatar: FunctionComponent<CustomAvatarProps> = () => {
	return (
		<Link
			href={Routes.HOME}
			className='flex w-fit items-center gap-2 duration-500 hover:scale-105 md:gap-4'
		>
			<Avatar className='h-12 w-12 md:h-16 md:w-16'>
				<AvatarImage
					src='https://github.com/shadcn.png'
					alt='Avatar 1'
					className='h-12 w-12 rounded-full md:h-16 md:w-16'
				/>
				<AvatarFallback>ADE</AvatarFallback>
			</Avatar>

			<HeaderName />
		</Link>
	);
};

export default CustomAvatar;
