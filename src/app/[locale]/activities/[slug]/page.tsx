import { FunctionComponent } from 'react';
import TitleCategories from '@/app/components/activities/[id]/TitleCategories';
import CustomCarousel from '@/app/components/activities/[id]/CustomCarousel';
import Content from '@/app/components/activities/[id]/Content';
import Socials from '@/app/components/activities/[id]/Socials';
import { unstable_setRequestLocale } from 'next-intl/server';
// import { notFound } from 'next/navigation';

interface ActivityDetailsPageProps {
	params: {
		locale: string;
		id: string;
	};
}

export async function generateMetadata({
	params: { locale },
}: ActivityDetailsPageProps) {
	// const t = await getTranslations({
	// 	locale: locale,
	// 	namespace: 'ActivitiesPage',
	// });

	return {
		locale: locale,
	};
}

export async function generateStaticParams() {
	return [{ id: '123' }, { id: '456' }];
}

const ActivityDetailsPage: FunctionComponent<ActivityDetailsPageProps> = ({
	params: { locale },
}) => {
	unstable_setRequestLocale(locale);
	// notFound();

	return (
		<main className='flex justify-center p-5 sm:px-8 sm:pt-8 lg:pt-12 xl:pt-16'>
			<div className='flex w-full max-w-[1400px] flex-col gap-2 md:gap-4'>
				<TitleCategories />
				<CustomCarousel />
				<Content />
				<Socials />
			</div>
		</main>
	);
};

export default ActivityDetailsPage;
