import { env } from '@/env';

export const constructImageLink = (path: string) =>
	`${env.NEXT_PUBLIC_BACKEND_URL}${path}`;
