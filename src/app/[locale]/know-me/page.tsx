import BackgroundWrapper from '@/app/components/BackgroundWrapper';
import Content from '@/app/components/know-me/Content';
import Hero from '@/app/components/know-me/Hero';
import ReachOut from '@/app/components/know-me/ReachOut';
import { env } from '@/env';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { knowMePageQuery } from '@/queries/know_me_page';
import { KnowMeSchema } from '@/types/know_me_page';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FunctionComponent } from 'react';

interface KnowMePageProps {
	params: {
		locale: string;
	};
}

export async function generateMetadata({
	params: { locale },
}: KnowMePageProps) {
	// const t = await getTranslations({
	// 	locale: locale,
	// 	namespace: 'ActivitiesPage',
	// });

	return {
		locale: locale,
	};
}

const KnowMePage: FunctionComponent<KnowMePageProps> = async ({
	params: { locale },
}) => {
	unstable_setRequestLocale(locale);
	const { data } = await fetchWithZod(
		KnowMeSchema,
		`${env.NEXT_PUBLIC_API_URL}/know-me?${knowMePageQuery(locale)}`
	);

	return (
		<BackgroundWrapper>
			<div className='flex w-full max-w-[1400px] flex-col gap-8 p-5 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 lg:items-center lg:gap-16'>
				<Hero />
				<Content details={data.details} />
				<ReachOut />
			</div>
		</BackgroundWrapper>
	);
};

export default KnowMePage;
