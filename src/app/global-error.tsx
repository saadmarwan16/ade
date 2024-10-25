'use client';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function GlobalError({
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
		<html>
			<body>
				<div className='mx-auto flex h-screen max-w-[1280] flex-col items-center justify-center gap-4'>
					<h2 className='text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl'>
						Internal Server Error
					</h2>
					<p className='text-xl font-medium text-gray-500 sm:text-2xl md:text-3xl'>
						A very unexpected error occurred. Please try again later.
					</p>
					<Button size={'lg'} className='mt-10' onClick={() => reset()}>
						Try again
					</Button>
				</div>
			</body>
		</html>
	);
}
