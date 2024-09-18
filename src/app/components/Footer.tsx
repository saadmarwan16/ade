import CustomAvatar from '../components/CustomAvatar';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io5';
import Link from 'next/link';
import { Routes } from '@/lib/routes';
import { FunctionComponent } from 'react';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<footer className='mt-6 grid grid-cols-1 gap-2 bg-gray-100 px-5 py-3'>
			<CustomAvatar />
			<div className='flex gap-1 text-3xl'>
				<Link href='https://instagram.com' target='_blank'>
					<IoLogoInstagram className='text-rose-600' />
				</Link>
				<Link href='https://linkedin.com' target='_blank'>
					<IoLogoLinkedin className='text-blue-800' />
				</Link>
			</div>
			<span className='font-light'>
				Email: <span className='font-semibold'>info@ade.com</span>
			</span>
			<span className='text-sm'>
				© 2024{' '}
				<Link href={Routes.HOME} className='text-blue-700'>
					ADE
				</Link>{' '}
				| All right reserved
			</span>
		</footer>
	);
};

export default Footer;
