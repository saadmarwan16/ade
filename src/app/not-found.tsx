import { buttonVariants } from '@/components/ui/button';
import { Routes } from '@/lib/routes';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='mx-auto flex h-[calc(100vh-200px)] max-w-[1280] flex-col items-center justify-center gap-4'>
			<h2 className='text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl'>
				Page not Found
			</h2>
			<p className='text-xl font-medium text-gray-500 sm:text-2xl md:text-3xl'>
				Could not find requested resource
			</p>
			<Link href={Routes.HOME} className={`${buttonVariants()} mt-10`}>
				Return Home
			</Link>
		</div>
	);
}
