'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const t = useTranslations('ErrorPage');
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className='mx-auto flex h-[calc(100vh-200px)] max-w-[1280] flex-col items-center justify-center gap-4'>
			<h2 className='text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl'>
				{t('message')}
			</h2>
			<p className='text-xl font-medium text-gray-500 sm:text-2xl md:text-3xl'>
				{t('description')}
			</p>
			<Button size={'lg'} className='mt-10' onClick={() => reset()}>
				{t('button')}
			</Button>
		</div>
	);
}
