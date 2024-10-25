import { defineRouting } from 'next-intl/routing';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
	locales: ['en', 'fr', 'tr'],
	defaultLocale: 'en',
	pathnames: {
		'/': '/',
		'/activities': {
			en: '/activities',
			fr: '/activités',
			tr: '/etkinlikler',
		},
		'/activities/[slug]': {
			en: '/activities/[slug]',
			fr: '/activités/[slug]',
			tr: '/etkinlikler/[slug]',
		},
		'/galleries': {
			en: '/galleries',
			fr: '/galeries',
			tr: '/galeriler',
		},
		'/galleries/[slug]': {
			en: '/galleries/[slug]',
			fr: '/galeries/[slug]',
			tr: '/galeriler/[slug]',
		},
		'/know-me': {
			en: '/know-me',
			fr: '/me-connaître',
			tr: '/beni-tani',
		},
	},
});

export {};
const {
	'/activities/[slug]': _,
	'/galleries/[slug]': __,
	...pathnames
} = routing.pathnames;
export type Pathnames = keyof typeof pathnames;

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
	createLocalizedPathnamesNavigation(routing);
