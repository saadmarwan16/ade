import { TActivityDetailsCategories } from '@/types/activity_details';
import React, { FunctionComponent } from 'react';

interface TitleCategoriesProps {
	title: string;
	categories: TActivityDetailsCategories;
}

const TitleCategories: FunctionComponent<TitleCategoriesProps> = ({
	title,
	categories,
}) => {
	return (
		<>
			<div className='flex flex-wrap gap-2 sm:gap-4'>
				{/* <div className='rounded-md border border-gray-700 px-2 py-0.5 text-sm sm:px-4 sm:py-1 sm:text-base'>
					Personal
				</div>
				<div className='rounded-md border border-gray-700 px-2 py-0.5 text-sm sm:px-4 sm:py-1 sm:text-base'>
					Social
				</div>
				<div className='rounded-md border border-gray-700 px-2 py-0.5 text-sm sm:px-4 sm:py-1 sm:text-base'>
					Political
				</div> */}
				{categories.map(({ id, title }) => (
					<div
						key={id}
						className='rounded-md border border-gray-700 px-2 py-0.5 text-sm sm:px-4 sm:py-1 sm:text-base'
					>
						{title}
					</div>
				))}
			</div>

			<h1 className='max-w-4xl text-3xl font-medium md:text-4xl lg:text-5xl'>
				{title}
			</h1>
		</>
	);
};

export default TitleCategories;
