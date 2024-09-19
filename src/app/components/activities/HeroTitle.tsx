import { FunctionComponent } from 'react';

interface HeroTitleProps {}

const HeroTitle: FunctionComponent<HeroTitleProps> = () => {
	return (
		<h1 className='max-w-[600px] text-3xl font-medium sm:text-4xl lg:text-5xl'>
			My personal, social, professional & political activities
		</h1>
	);
};

export default HeroTitle;
