import React, { FunctionComponent } from 'react';
import HeaderLanguage from './HeaderLanguage';
import Hamburger from './Hamburger';
import CustomAvatar from './CustomAvatar';
import { Link } from '@/i18n/routing';
import { TAvatar } from '@/types/meta';
import { getTranslations } from 'next-intl/server';

interface HeaderProps {
	locale?: 'US' | 'FR' | 'TR';
	avatar: TAvatar;
}

const Header: FunctionComponent<HeaderProps> = async ({ locale, avatar }) => {
	const t = await getTranslations('Shared');

	return (
		<header className='fixed z-10 flex h-16 w-full items-center bg-white/40 shadow-sm backdrop-blur-md sm:h-20 md:h-24'>
			<div className='flex grow items-center justify-between px-5 sm:px-8'>
				<CustomAvatar avatar={avatar} />

				<div className='hidden gap-6 text-xl text-gray-600 md:flex'>
					<Link href='/activities'>{t('activities')}</Link>
					<Link href='/galleries'>{t('galleries')}</Link>
					<Link href='/know-me'>{t('know-me')}</Link>
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
