import { FunctionComponent } from 'react';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { Routes } from '@/lib/routes';
import Link from 'next/link';

interface MeAndPartnersProps {}

const logos = [
	{
		alt: 'Facebook',
		src: '/logos/facebook.webp',
	},
	{
		alt: 'Google',
		src: '/logos/google.jpg',
	},
	{
		alt: 'Instagram',
		src: '/logos/instagram.png',
	},
	{
		alt: 'LinkedIn',
		src: '/logos/linkedin.png',
	},
	{
		alt: 'X formerly twitter',
		src: '/logos/x.avif',
	},
];

const MeAndPartners: FunctionComponent<MeAndPartnersProps> = () => {
	return (
		<div className='flex w-full flex-col gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:gap-16'>
			<div className='-mx-5 overflow-hidden sm:-mx-8 lg:basis-2/3 xl:basis-3/5 2xl:grow'>
				<div className='hidden gap-8 px-8 md:flex'>
					{logos.map((logo, idx) => (
						<div
							key={idx}
							className='relative aspect-square flex-shrink-0 basis-16 rounded-md xl:basis-20 2xl:basis-24'
						>
							<Image
								alt={logo.alt}
								src={logo.src}
								fill
								className='rounded-md'
							/>
						</div>
					))}
				</div>
				<div className='group flex w-fit overflow-hidden md:hidden'>
					<div className='flex w-screen animate-loop-scroll space-x-4 group-hover:paused'>
						{logos.map((logo, idx) => (
							<div
								key={idx}
								className='relative aspect-square flex-shrink-0 basis-12 rounded-md sm:basis-14'
							>
								<Image
									alt={logo.alt}
									src={logo.src}
									fill
									className='rounded-md'
								/>
							</div>
						))}
					</div>
					<div
						className='flex w-screen animate-loop-scroll space-x-4 group-hover:paused'
						aria-hidden
					>
						{logos.map((logo, idx) => (
							<div
								key={idx}
								className='relative aspect-square flex-shrink-0 basis-12 rounded-md sm:basis-14'
							>
								<Image
									alt={logo.alt}
									src={logo.src}
									fill
									className='rounded-md'
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='flex w-full flex-col items-end gap-2 sm:w-4/5 sm:items-start lg:relative lg:-top-40 lg:basis-1/3 xl:basis-2/5 2xl:basis-[500px] 3xl:static'>
				<p className='text-lg sm:text-xl md:text-2xl'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
					cupiditate nostrum.
				</p>

				<Link
					href={Routes.KNOW_ME}
					className={buttonVariants({ variant: 'default' })}
				>
					Learn more
				</Link>
			</div>
		</div>
	);
};

export default MeAndPartners;