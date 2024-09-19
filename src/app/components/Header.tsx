'use client';

import { FunctionComponent } from 'react';
import Link from 'next/link';
import HeaderLanguage from './HeaderLanguage';
import Hamburger from './Hamburger';
import { Routes } from '@/lib/routes';
import CustomAvatar from './CustomAvatar';

const Header: FunctionComponent = () => {
	return (
		<header className='fixed z-10 flex h-16 w-full items-center bg-white/40 shadow-sm backdrop-blur-md sm:h-20 md:h-24'>
			<div className='flex grow items-center justify-between px-5 sm:px-8'>
				<CustomAvatar />

				<div className='hidden gap-6 text-xl text-gray-600 md:flex'>
					<Link href={Routes.ACTIVITIES}>Activities</Link>
					<Link href={Routes.GALLERY}>Gallery</Link>
					<Link href={Routes.KNOW_ME}>Know me</Link>
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
