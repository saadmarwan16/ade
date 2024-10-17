import createNextIntlPlugin from 'next-intl/plugin';

await import('./src/env.js');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '1337',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'github.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'assets.react-photo-album.com',
				pathname: '**',
			},
		],
	},
	experimental: {
		typedRoutes: true,
	},
};

export default withNextIntl(nextConfig);
