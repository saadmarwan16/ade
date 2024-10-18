import BackgroundWrapper from '@/app/components/BackgroundWrapper';
import Hero from '@/app/components/galleries/[id]/Hero';
import Photos from '@/app/components/galleries/[id]/Photos';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FunctionComponent } from 'react';

interface GalleryDetailsPageProps {
	params: {
		locale: string;
		id: string;
	};
}

export async function generateMetadata({
	params: { locale },
}: GalleryDetailsPageProps) {
	// const t = await getTranslations({
	// 	locale: locale,
	// 	namespace: 'ActivitiesPage',
	// });

	return {
		locale: locale,
	};
}

export async function generateStaticParams() {
	return [{ id: '123' }];
}


const GalleryDetailsPage: FunctionComponent<GalleryDetailsPageProps> = ({
	params: { locale },
}) => {
	unstable_setRequestLocale(locale);

	return (
		<BackgroundWrapper>
			<div className='flex w-full flex-col gap-8 sm:gap-10 sm:py-10 md:gap-12 lg:items-center lg:gap-16'>
				<Hero />
				<Photos />
			</div>
		</BackgroundWrapper>
	);
};

export default GalleryDetailsPage;
