import { FunctionComponent } from 'react';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { ActivitiesSchema } from '@/types/activities';
import { env } from '@/env';
import { activitiesQuery } from '@/queries/activities';
import ActivitiesClient from './ActivitiesClient';
// import { CiBatteryEmpty } from "react-icons/ci";
{/* <CiBatteryEmpty /> */}

interface ActivitiesProps {
	locale: string;
	category: string;
}

const Activities: FunctionComponent<ActivitiesProps> = async ({
	locale,
	category,
}) => {
	const activities = await fetchWithZod(
		ActivitiesSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities?${activitiesQuery(locale, 1, category)}`
	);

	return (
		<ActivitiesClient
			activities={activities}
			locale={locale}
			category={category}
		/>
	);
};

export default Activities;
