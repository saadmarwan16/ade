import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

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
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				<div className='pt-16 sm:pt-20 md:pt-24'>{children}</div>
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
			</body>
		</html>
	);
}
