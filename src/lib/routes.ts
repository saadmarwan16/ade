import { Route } from 'next';

export class Routes {
	static HOME = '/';
	static ACTIVITIES = '/activities';
	static GALLERY = '/galleries';
	static KNOW_ME = '/know-me';
	// static HOME: Route = '/en';
	// static ACTIVITIES: Route = '/en/activities';
	// static GALLERY: Route = '/en/galleries';
	// static KNOW_ME: Route = '/en/know-me';

	static ACTIVITY_DETAILS = (id: string) => `${this.ACTIVITIES}/${id}` as Route;
	static GALLERY_DETAILS = (id: string) => `${this.GALLERY}/${id}` as Route;
}

// Routes.ACTIVITY_DETAILS('156')
