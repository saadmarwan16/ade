import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { TKnowMeDetails } from '@/types/know_me_page';
import { constructImageLink } from '@/lib/constructLink';

interface ContentProps {
	details: TKnowMeDetails;
}

const Content: FunctionComponent<ContentProps> = (props) => {
	const details = props.details.map((detail) => ({
		title: detail.title,
		description: detail.description,
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<Image
					src={constructImageLink(detail.image.url)}
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt={`Image of ${detail.title}`}
				/>
			</div>
		),
	}));

	return (
		<>
			<div className='hidden w-full lg:block'>
				<StickyScroll content={details} />
			</div>
			<div className='-mx-5 flex flex-col gap-6 bg-gray-200/40 px-5 py-8 backdrop-blur-sm sm:-mx-8 sm:px-8 sm:py-10 lg:hidden'>
				{details.map((item, index) => (
					<div key={index} className='flex flex-col gap-1'>
						<h4 className='text-2xl font-medium sm:text-3xl'>{item.title}</h4>
						<p className='text-gray-600 sm:text-lg'>{item.description}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Content;
