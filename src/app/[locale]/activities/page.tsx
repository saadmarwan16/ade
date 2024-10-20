import { FunctionComponent } from 'react';
import { Separator } from '@/components/ui/separator';
import BackgroundWrapper from '@/app/components/BackgroundWrapper';
import HeroTitle from '@/app/components/activities/HeroTitle';
import Featured from '@/app/components/activities/Featured';
import Tabs from '@/app/components/activities/Tabs';
import Activities from '@/app/components/activities/Activities';
import AceternityButton from '@/components/ui/aceternity-button';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { ActivitiesPageSchema } from '@/types/activities_page';
import { env } from '@/env';
import { activitiesPageQuery } from '@/queries/activities_page';

interface ActivitiesPageProps {
	params: {
		locale: string;
	};
}

export async function generateMetadata({
	params: { locale },
}: ActivitiesPageProps) {
	// const t = await getTranslations({
	// 	locale: locale,
	// 	namespace: 'ActivitiesPage',
	// });

	return {
		locale: locale,
	};
}

const ActivitiesPage: FunctionComponent<ActivitiesPageProps> = async ({
	params: { locale },
}) => {
	unstable_setRequestLocale(locale);
	const t = await getTranslations('ActivitiesPage');
	const { data } = await fetchWithZod(
		ActivitiesPageSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities-page?${activitiesPageQuery(locale)}`
	);

	return (
		<BackgroundWrapper>
			<div className='flex max-w-[1400px] flex-col gap-8 p-5 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 lg:gap-16'>
				<HeroTitle title={data.title} />
				<Featured activity={data.featured_activity} />
				<Separator className='bg-gray-400' />
				<Tabs />
				<Activities locale={locale} />
				<AceternityButton
					text={t('see-more-button')}
					className='sm:place-self-end'
				/>
			</div>
		</BackgroundWrapper>
	);
};

export default ActivitiesPage;
