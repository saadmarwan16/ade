import { FunctionComponent } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
	const t = useTranslations('HomePage');

	return (
		<div className='flex w-full flex-col overflow-hidden text-6xl font-medium sm:text-7xl md:text-8xl lg:text-[14vw] xl:text-[13vw] 2xl:text-[11vw]'>
			<span>{t('name')}</span>
			<div className='lg:relative lg:left-32'>
				<span>A</span>
				<span>d</span>
				<span>e</span>
				<span>b</span>
				<span>a</span>
				<span>y</span>
				<span className='inline lg:hidden'>o</span>
				<span className='relative hidden aspect-square rounded-full lg:inline-block lg:w-24 xl:w-28'>
					<Image
						alt='Avatar 2'
						src='https://github.com/shadcn.png'
						fill
						className='rounded-full'
					/>
				</span>
			</div>
			<div>
				<span>A</span>
				<span>d</span>
				<span>e</span>
				<span>m</span>
				<span className='inline lg:hidden'>o</span>
				<span className='relative hidden aspect-square rounded-full lg:inline-block lg:w-24 xl:w-28'>
					<Image
						alt='Avatar 3'
						src='https://github.com/shadcn.png'
						fill
						className='rounded-full'
					/>
				</span>
				<span>n</span>
			</div>
		</div>
	);
};

export default Hero;
