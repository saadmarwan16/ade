import { FunctionComponent } from 'react';
import { Permanent_Marker } from 'next/font/google';
import { getTranslations } from 'next-intl/server';

interface HeroProps {}

const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
});

const Hero: FunctionComponent<HeroProps> = async () => {
	const t = await getTranslations('KnowMePage');

	return (
		<div className='flex flex-col items-center text-center lg:w-full lg:items-start lg:text-left'>
			<h2
				className={`${permanentMarker.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
			>
				ADE
			</h2>
			<h4 className='font-light text-gray-700 sm:text-lg md:text-xl lg:text-2xl'>
				{t('me')}
			</h4>
		</div>
	);
};

export default Hero;
