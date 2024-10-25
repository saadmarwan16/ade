import { ActivitiesSchema } from '@/types/activities';
import { fetchWithZod } from './fetchWithZod';
import { env } from '@/env';
import { activitiesQuery } from '@/queries/activities';

const getLocale = (locale: 'en' | 'fr' | 'tr') => {
	const locales = {
		en: 'activities',
		fr: 'activités',
		tr: 'etkinlikler',
	};

	return locales[locale];
};

export const getAllActivities = async (locale: string = 'en') => {
	const activities = await fetchWithZod(
		ActivitiesSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities?${activitiesQuery(locale)}`
	);

    return activities;
};
