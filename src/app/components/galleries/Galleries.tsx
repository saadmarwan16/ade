import { FunctionComponent } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Routes } from '@/lib/routes';

interface GalleriesProps {}

const Galleries: FunctionComponent<GalleriesProps> = () => {
	return (
		<div className='md:-mb-18 -mx-5 -mb-11 bg-gray-200/40 px-5 py-8 backdrop-blur-sm sm:-mx-8 sm:-mb-16 sm:px-8 lg:w-screen lg:py-12 xl:py-16'>
			<div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:max-w-[1336px] xl:gap-8'>
				{[...Array(10)].map((_, idx) => (
					<Link
						key={idx}
						href={Routes.GALLERY_DETAILS('123')}
						className='flex flex-col gap-2 duration-500 hover:scale-105 hover:text-blue-700'
					>
						<div className='relative aspect-video rounded-md'>
							<Image alt='Title' src='/me-1.jpg' fill className='rounded-md' />
							<div className='absolute bottom-0 left-0 right-0 top-0 rounded-md bg-black/30 p-2'>
								<div className='w-fit rounded-sm border-[0.5px] border-gray-300 px-2'>
									<small className='text-base font-extralight text-white'>
										92 photos
									</small>
								</div>
							</div>
						</div>

						<h4 className='line-clamp-2 text-xl font-medium xl:text-2xl'>
							Meeting with the Minister of Health
						</h4>
					</Link>
				))}

				<Button className='sm:col-span-2 sm:place-self-end'>See more</Button>
			</div>
		</div>
	);
};

export default Galleries;
