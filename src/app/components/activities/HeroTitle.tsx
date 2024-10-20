import { FunctionComponent } from 'react';

interface HeroTitleProps {
	title: string;
}

const HeroTitle: FunctionComponent<HeroTitleProps> = ({ title }) => {
	return (
		<h1 className='max-w-[600px] text-3xl font-medium sm:text-4xl lg:text-5xl'>
			{title}
		</h1>
	);
};

export default HeroTitle;
