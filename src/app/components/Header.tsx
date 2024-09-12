import { FunctionComponent } from 'react';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Avatar } from '@radix-ui/react-avatar';
import HeaderName from './HeaderName';
import Link from 'next/link';
import HeaderLanguage from './HeaderLanguage';
import Hamburger from './Hamburger';

const Header: FunctionComponent = () => {
	return (
		<header className='fixed z-10 flex h-16 w-full items-center bg-white/40 shadow-sm backdrop-blur-md sm:h-20 md:h-24'>
			<div className='flex grow items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16'>
				<Link
					href='/'
					className='flex items-center gap-2 duration-500 hover:scale-105 md:gap-4'
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

				<div className='hidden gap-6 text-xl text-gray-600 md:flex'>
					<Link href='#'>Activities</Link>
					<Link href='#'>Gallery</Link>
					<Link href='#'>Know me</Link>
				</div>

				<>
					<Hamburger />
					<HeaderLanguage />
				</>
			</div>
		</header>
	);
};

export default Header;
