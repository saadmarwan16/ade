import { FunctionComponent } from 'react';

interface HeroTitleProps {}

const HeroTitle: FunctionComponent<HeroTitleProps> = () => {
	return (
		<h1 className='max-w-[600px] text-3xl font-medium sm:text-4xl lg:text-5xl'>
			Personal, social, professional & political activities from{' '}
			<span className='rounded-sm bg-green-800 px-1 text-white'>ADE</span>
		</h1>
	);
};

export default HeroTitle;
