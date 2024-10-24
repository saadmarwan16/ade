import CustomAvatar from '../components/CustomAvatar';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io5';
import { Routes } from '@/lib/routes';
import { FunctionComponent } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { TAvatar, TEmail, TSocial } from '@/types/meta';

interface FooterProps {
	linkedin: TSocial;
	instagram: TSocial;
	email: TEmail;
	avatar: TAvatar;
}

const Footer: FunctionComponent<FooterProps> = ({
	avatar,
	email,
	instagram,
	linkedin,
}) => {
	const t = useTranslations('Shared');

	return (
		<footer className='mt-6 flex justify-center bg-gray-100 px-5 py-3 sm:px-8'>
			<div className='grid w-full max-w-[1400px] grid-cols-1 gap-2 sm:grid-cols-2 sm:items-center'>
				<div className='sm:order-1'>
					<CustomAvatar avatar={avatar} />
				</div>
				<div className='flex gap-1 text-3xl sm:order-2 sm:place-self-end md:text-4xl'>
					<a
						href={instagram.link}
						target='_blank'
						className='duration-500 hover:scale-105'
					>
						<IoLogoInstagram className='text-rose-600' />
					</a>
					<a
						href={linkedin.link}
						target='_blank'
						className='duration-500 hover:scale-105'
					>
						<IoLogoLinkedin className='text-blue-800' />
					</a>
				</div>
				<span className='font-light sm:order-4 sm:place-self-end md:text-lg'>
					Email: <span className='font-semibold'>{email.email}</span>
				</span>
				<span className='text-sm sm:order-3 md:text-base'>
					© 2024{' '}
					<Link href={Routes.HOME} className='text-blue-700'>
						ADE
					</Link>{' '}
					| {t('rights')}
				</span>
			</div>
		</footer>
	);
};

export default Footer;
