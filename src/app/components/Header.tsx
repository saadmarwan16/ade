import React, { FunctionComponent } from 'react';
import HeaderLanguage from './HeaderLanguage';
import Hamburger from './Hamburger';
import { Routes } from '@/lib/routes';
import CustomAvatar from './CustomAvatar';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface HeaderProps {
	locale?: 'US' | 'FR' | 'TR';
}

const Header: FunctionComponent<HeaderProps> = ({ locale }) => {
	const t = useTranslations('Shared');

	return (
		<header className='fixed z-10 flex h-16 w-full items-center bg-white/40 shadow-sm backdrop-blur-md sm:h-20 md:h-24'>
			<div className='flex grow items-center justify-between px-5 sm:px-8'>
				<CustomAvatar />

				<div className='hidden gap-6 text-xl text-gray-600 md:flex'>
					<Link href={Routes.ACTIVITIES}>{t('activities')}</Link>
					<Link href={Routes.GALLERY}>{t('galleries')}</Link>
					<Link href={Routes.KNOW_ME}>{t('know-me')}</Link>
				</div>

				<>
					<Hamburger />
					<div className='hidden md:block'>
						<HeaderLanguage locale={locale} />
					</div>
				</>
			</div>
		</header>
	);
};

export default Header;
