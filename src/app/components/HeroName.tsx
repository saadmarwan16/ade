import { FunctionComponent } from 'react';
import { Ubuntu } from 'next/font/google';
import Image from 'next/image';

interface HeroNameProps {}

const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: ['700'],
});

const HeroName: FunctionComponent<HeroNameProps> = () => {
	return (
		<div
			className={`${ubuntu.className} flex flex-col text-[19vw] font-semibold sm:text-[16vw] lg:gap-4 lg:text-[14vw]`}
		>
			<span className='leading-[19vw] sm:leading-[16vw] lg:leading-[11vw]'>
				I am
			</span>
			<div className='relative flex items-end gap-1 lg:left-[8vw] lg:gap-2 [&>*]:leading-[19vw] [&>*]:sm:leading-[16vw] [&>*]:lg:leading-[11vw]'>
				<span>A</span>
				<span>d</span>
				<span>e</span>
				<span>b</span>
				<span>a</span>
				<span>y</span>
				<span className='relative hidden aspect-square rounded-full lg:block lg:w-24 xl:w-28 2xl:w-32'>
					<Image
						alt='Avatar 2'
						src='https://github.com/shadcn.png'
						fill
						className='rounded-full'
					/>
				</span>
				<span className='inline lg:hidden'>o</span>
			</div>
			<div className='flex items-end gap-1 lg:gap-2 [&>*]:leading-[19vw] [&>*]:sm:leading-[16vw] [&>*]:lg:leading-[11vw]'>
				<span>A</span>
				<span>d</span>
				<span>e</span>
				<span>m</span>
				<span className='relative hidden aspect-square rounded-full lg:block lg:w-24 xl:w-28 2xl:w-32'>
					<Image
						alt='Avatar 3'
						src='https://github.com/shadcn.png'
						fill
						className='rounded-full'
					/>
				</span>
				<span className='inline lg:hidden'>o</span>
				<span>n</span>
			</div>
		</div>
	);
};

export default HeroName;
