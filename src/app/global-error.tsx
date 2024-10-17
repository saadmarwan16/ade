'use client';

import { Button } from '@/components/ui/button';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html>
			<body>
				<div className='mx-auto flex h-screen max-w-[1280] flex-col items-center justify-center gap-4'>
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
			</body>
		</html>
	);
}
