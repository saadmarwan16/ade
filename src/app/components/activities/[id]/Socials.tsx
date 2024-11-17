'use client';

import { FunctionComponent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
	EmailShareButton,
	EmailIcon,
	FacebookShareButton,
	FacebookIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TwitterShareButton,
	XIcon,
	WhatsappShareButton,
	WhatsappIcon,
} from 'react-share';
import { getPathname } from '@/i18n/routing';
import { env } from '@/env';

interface SocialsProps {
	slug: string;
}

const Socials: FunctionComponent<SocialsProps> = ({ slug }) => {
	const t = useTranslations('ActivityDetailsPage');
	const locale = useLocale();
	const pathname = getPathname({
		locale: locale as 'en' | 'fr' | 'tr',
		href: {
			pathname: '/activities/[slug]',
			params: { slug: slug },
		},
	});
	const url = `${env.NEXT_PUBLIC_BASE_URL}/${locale}${pathname}`;

	return (
		<div className='flex justify-center'>
			<div className='flex w-full max-w-4xl flex-col gap-2'>
				<span className='text-lg font-medium'>{t('share')}: </span>
				<div className='flex flex-wrap gap-1 sm:gap-2 md:gap-3 lg:gap-4'>
					<LinkedinShareButton url={url}>
						<LinkedinIcon size={48} round />
					</LinkedinShareButton>
					<FacebookShareButton url={url}>
						<FacebookIcon size={48} round />
					</FacebookShareButton>
					<TwitterShareButton url={url}>
						<XIcon size={48} round />
					</TwitterShareButton>
					<WhatsappShareButton url={url}>
						<WhatsappIcon size={48} round />
					</WhatsappShareButton>
					<EmailShareButton url={url}>
						<EmailIcon size={48} round />
					</EmailShareButton>
				</div>
			</div>
		</div>
	);
};

export default Socials;
