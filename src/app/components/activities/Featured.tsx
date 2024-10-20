import { FunctionComponent } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { TFeaturedActivity } from '@/types/activities_page';
import { constructImageLink } from '@/lib/constructLink';

interface FeaturedProps {
	activity: TFeaturedActivity;
}

const Featured: FunctionComponent<FeaturedProps> = ({ activity }) => {
	return (
		<Link
			href={{
				pathname: '/activities/[slug]',
				params: { slug: activity.slug },
			}}
			className='flex flex-col gap-2 hover:text-blue-700'
		>
			<div className='relative aspect-video rounded-tr-[3rem] sm:rounded-tr-[4rem] md:rounded-tr-[5rem] lg:aspect-auto lg:h-[600px] lg:rounded-tr-[6rem] xl:h-[700px]'>
				<Image
					src={constructImageLink(activity.thumbnail.url)}
					alt={activity.title}
					fill
					className='rounded-tr-[3rem] sm:rounded-tr-[4rem] md:rounded-tr-[5rem] lg:rounded-tr-[6rem]'
				/>
			</div>
			<h3 className='text-xl font-medium sm:text-2xl lg:text-3xl'>
				{activity.title}
			</h3>
		</Link>
	);
};

export default Featured;
