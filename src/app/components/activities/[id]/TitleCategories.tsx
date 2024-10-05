import React, { FunctionComponent } from 'react';

interface TitleCategoriesProps {}

const TitleCategories: FunctionComponent<TitleCategoriesProps> = () => {
	return (
		<>
			<div className='flex flex-wrap gap-2 sm:gap-4'>
				<div className='rounded-md border border-gray-700 px-2 py-0.5 text-sm sm:px-4 sm:py-1 sm:text-base'>
					Personal
				</div>
				<div className='rounded-md border border-gray-700 px-2 py-0.5 text-sm sm:px-4 sm:py-1 sm:text-base'>
					Social
				</div>
				<div className='rounded-md border border-gray-700 px-2 py-0.5 text-sm sm:px-4 sm:py-1 sm:text-base'>
					Political
				</div>
			</div>

			<h1 className='max-w-4xl text-3xl font-medium md:text-4xl lg:text-5xl'>
				Meeting the CEO of Cerrahi Hastane
			</h1>
		</>
	);
};

export default TitleCategories;
