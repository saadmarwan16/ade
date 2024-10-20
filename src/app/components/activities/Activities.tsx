import { FunctionComponent } from 'react';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { ActivitiesSchema } from '@/types/activities';
import { env } from '@/env';
import { activitiesQuery } from '@/queries/activities';
import ActivitiesClient from './ActivitiesClient';

interface ActivitiesProps {
	locale: string;
}

const Activities: FunctionComponent<ActivitiesProps> = async ({ locale }) => {
	const activities = await fetchWithZod(
		ActivitiesSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities?${activitiesQuery(locale)}`
	);

	return <ActivitiesClient activities={activities} />;
};

export default Activities;
