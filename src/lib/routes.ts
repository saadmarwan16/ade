import { Route } from 'next';

export class Routes {
	static HOME: Route = '/';
	static ACTIVITIES: Route = '/activities';
	static GALLERY: Route = '/gallery';
	static KNOW_ME: Route = '/know-me';

	static ACTIVITY_DETAILS = (id: string) => `${this.ACTIVITIES}/${id}` as Route;
	static GALLERY_DETAILS = (id: string) => `${this.GALLERY}/${id}` as Route;
}

// Routes.ACTIVITY_DETAILS('156')
