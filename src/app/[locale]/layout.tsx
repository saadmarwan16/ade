import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { FunctionComponent, PropsWithChildren } from 'react';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { MetaSchema } from '@/types/meta';
import { env } from '@/env';
import { metaQuery } from '@/queries/meta';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'I am Adebayo Ademon | Adebayo Ademon',
	description: 'I am a passionate and dedicated biomedical engineer',
	metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
};

interface LocaleLayoutProps extends PropsWithChildren {
	params: { locale: string };
}

const getLocale = (locale: string): 'US' | 'FR' | 'TR' | undefined => {
	if (locale === 'en') return 'US';
	if (locale === 'fr') return 'FR';
	if (locale === 'tr') return 'TR';
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

const LocaleLayout: FunctionComponent<LocaleLayoutProps> = async ({
	children,
	params: { locale },
}) => {
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	setRequestLocale(locale);
	const messages = await getMessages();
	const { data } = await fetchWithZod(
		MetaSchema,
		`${env.NEXT_PUBLIC_API_URL}/meta?${metaQuery(locale)}`
	);

	return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					<Header locale={getLocale(locale)} avatar={data.avatar} />
					<div className='pt-16 sm:pt-20 md:pt-24'>{children}</div>
					<Footer
						avatar={data.avatar}
						email={data.email}
						instagram={data.instagram}
						linkedin={data.linkedin}
					/>
					<Toaster
						richColors
						closeButton
						duration={3000}
						expand={true}
						gap={8}
						pauseWhenPageIsHidden={true}
						position='bottom-right'
						theme='system'
					/>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default LocaleLayout;
