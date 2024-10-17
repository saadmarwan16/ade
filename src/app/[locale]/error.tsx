'use client';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className='mx-auto flex h-[calc(100vh-200px)] max-w-[1280] flex-col items-center justify-center gap-4'>
			<h2 className='text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl'>
				{error.message}
			</h2>
			<p className='text-xl font-medium text-gray-500 sm:text-2xl md:text-3xl'>
				{(error.cause as string | undefined) ??
					'A very unexpected error occurred. Please try again later.'}
			</p>
			<Button size={'lg'} className='mt-10' onClick={() => reset()}>
				Try again
			</Button>
		</div>
	);
}
