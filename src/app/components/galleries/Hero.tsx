import { FunctionComponent } from 'react';
import { RiArrowDownDoubleLine } from 'react-icons/ri';

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
	return (
		<div className='flex w-full max-w-[1400px] p-5 sm:px-8 flex-col gap-4 lg:gap-10'>
			<h2 className='max-w-[400px] text-3xl font-medium sm:text-4xl sm:font-semibold lg:max-w-[600px] lg:text-5xl'>
				WELCOME TO MY VISUAL DIARY
			</h2>

			<div className='flex flex-col lg:gap-4'>
				<p className='max-w-[400px] text-lg leading-5 sm:text-xl lg:place-self-end lg:pr-4 lg:text-end xl:text-2xl'>
					You can scroll down below to see my galleries
				</p>

				<div className='max-w-[400px] animate-bounce place-self-end text-5xl sm:text-6xl'>
					<RiArrowDownDoubleLine />
				</div>
			</div>
		</div>
	);
};

export default Hero;
