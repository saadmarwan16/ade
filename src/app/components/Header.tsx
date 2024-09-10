import { FunctionComponent } from 'react';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Avatar } from '@radix-ui/react-avatar';
import HeaderName from './HeaderName';
import Link from 'next/link';
import HeaderLanguage from './HeaderLanguage';

const Header: FunctionComponent = () => {
	return (
		<header className='fixed z-10 flex h-24 w-full items-center bg-white/40 shadow-md backdrop-blur-md'>
			<div className='flex grow items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16'>
				<Link
					href='/'
					className='flex items-center gap-4 duration-500 hover:scale-105'
				>
					<Avatar className='h-16 w-16'>
						<AvatarImage
							src='https://github.com/shadcn.png'
							alt='@shadcn'
							className='h-16 w-16 rounded-full'
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					<HeaderName />
				</Link>
				<div className='flex gap-6 text-xl text-gray-600'>
					<Link href='#'>Activities</Link>
					<Link href='#'>Gallery</Link>
					<Link href='#'>Know me</Link>
				</div>
				<HeaderLanguage />
			</div>
		</header>
	);
};

export default Header;
