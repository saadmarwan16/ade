import createNextIntlPlugin from 'next-intl/plugin';

await import('./src/env.js');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname: '**',
			},
		],
	},
	experimental: {
		typedRoutes: true,
	},
};

export default withNextIntl(nextConfig);
