import BackgroundWrapper from '@/app/components/BackgroundWrapper';
import Galleries from '@/app/components/galleries/Galleries';
import Hero from '@/app/components/galleries/Hero';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FunctionComponent } from 'react';

interface GalleriesPageProps {
	params: {
		locale: string;
	};
}

export async function generateMetadata({
	params: { locale },
}: GalleriesPageProps) {
	// const t = await getTranslations({
	// 	locale: locale,
	// 	namespace: 'ActivitiesPage',
	// });

	return {
		locale: locale,
	};
}

const GalleriesPage: FunctionComponent<GalleriesPageProps> = ({
	params: { locale },
}) => {
	unstable_setRequestLocale(locale);
	// throw new Error('404 Not Found'); // This is from the strapi api error object

	return (
		<BackgroundWrapper>
			<div className='flex w-full flex-col gap-8 sm:gap-10 sm:py-10 md:gap-12 lg:items-center lg:gap-16'>
				<Hero />
				<Galleries />
			</div>
		</BackgroundWrapper>
	);
};

export default GalleriesPage;
