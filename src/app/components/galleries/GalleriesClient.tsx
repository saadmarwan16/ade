'use client';

import { GalleriesSchema, TGalleries } from '@/types/galleries';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import AceternityButton from '@/components/ui/aceternity-button';
import { Link } from '@/i18n/routing';
import { constructImageLink } from '@/lib/constructLink';
import { useTranslations } from 'next-intl';
import useSWRInfinite from 'swr/infinite';
import { galleriesQuery } from '@/queries/galleries';
import { env } from '@/env';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { Skeleton } from '@/components/ui/skeleton';

interface GalleriesClientProps {
	galleries: TGalleries;
	locale: string;
}

const GalleriesClient: FunctionComponent<GalleriesClientProps> = ({
	galleries: { data },
	locale,
}) => {
	const t = useTranslations('GalleriesPage');
	const {
		data: galleries,
		size,
		setSize,
		isLoading,
		isValidating,
	} = useSWRInfinite(
		(pageIdx) => {
			return `${env.NEXT_PUBLIC_API_URL}/galleries?${galleriesQuery(locale, pageIdx + 1)}`;
		},
		async (url) => {
			const { data } = await fetchWithZod(GalleriesSchema, url);

			return data;
		},
		{
			fallbackData: [data],
			revalidateOnFocus: false,
			suspense: true,
		}
	);

	return (
		<div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:max-w-[1336px] xl:gap-8'>
			{galleries?.map((page) => (
				<>
					{page.map((gallery) => (
						<Link
							key={gallery.documentId}
							href={{
								pathname: '/galleries/[slug]',
								params: { slug: gallery.slug },
							}}
							className='flex flex-col gap-2 duration-500 hover:scale-105 hover:text-blue-700'
						>
							<div className='relative aspect-video rounded-md'>
								<Image
									alt={gallery.title}
									src={constructImageLink(gallery.thumbnail.url)}
									fill
									className='rounded-md'
								/>
								<div className='absolute bottom-0 left-0 right-0 top-0 rounded-md bg-black/30 p-2'>
									<div className='w-fit rounded-sm border-[0.5px] border-gray-300 px-2'>
										<small className='text-base font-extralight text-white'>
											{gallery.images.length} {t('photos')}
										</small>
									</div>
								</div>
							</div>

							<h4 className='line-clamp-2 text-xl font-medium xl:text-2xl'>
								{gallery.title}
							</h4>
						</Link>
					))}
				</>
			))}
			{isValidating && (
				<>
					{[...Array(12)].map((_, idx) => (
						<Skeleton key={idx} className='aspect-video' />
					))}
				</>
			)}
			<AceternityButton
				text={t('see-more-button')}
				className='sm:col-span-2 sm:place-self-end lg:col-span-3'
				disabled={
					isLoading || isValidating || galleries?.[size - 1]?.length === 0
				}
				onClick={() => setSize(size + 1)}
			/>
		</div>
	);
};

export default GalleriesClient;
