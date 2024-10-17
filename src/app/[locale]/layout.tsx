import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<div className='pt-16 sm:pt-20 md:pt-24'>{children}</div>
			<Footer />
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
		</>
	);
}
