import { FunctionComponent } from 'react';
import { Ubuntu } from 'next/font/google';

interface HeroNameProps {}

const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: ['700'],
});

const HeroName: FunctionComponent<HeroNameProps> = () => {
	return (
		<div
			className={`${ubuntu.className} flex flex-col gap-4 text-[12vw] font-semibold leading-[20vh]`}
		>
			<span>I am</span>
			<div className='relative flex items-end gap-2 lg:left-[10vw]'>
				<span>A</span>
				<span>d</span>
				<span>e</span>
				<span>b</span>
				<span>a</span>
				<span>y</span>
				<span className='h-16 rounded-full bg-black lg:block lg:h-20 lg:w-20 xl:h-36 xl:w-36'></span>
				<span className='inline lg:hidden'>o</span>
			</div>
			<div className='flex items-end gap-2'>
				<span>A</span>
				<span>d</span>
				<span>e</span>
				<span>m</span>
				<span className='h-16 rounded-full bg-black lg:block lg:h-20 lg:w-20 xl:h-36 xl:w-36'></span>
				<span className='inline lg:hidden'>o</span>
				<span>n</span>
			</div>
		</div>
	);
};

export default HeroName;
