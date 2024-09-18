import { FunctionComponent } from 'react';

interface TabsProps {}

const Tabs: FunctionComponent<TabsProps> = () => {
	return (
		<div className='flex flex-wrap gap-3 sm:gap-4 sm:text-lg'>
			<div className='cursor-pointer rounded-md bg-gray-700 px-4 py-1 text-white'>
				All
			</div>
			<div className='cursor-pointer rounded-md border border-gray-700 bg-transparent px-4 py-1'>
				Personal
			</div>
			<div className='cursor-pointer rounded-md border border-gray-700 bg-transparent px-4 py-1'>
				Social
			</div>
			<div className='cursor-pointer rounded-md border border-gray-700 bg-transparent px-4 py-1'>
				Political
			</div>
			<div className='cursor-pointer rounded-md border border-gray-700 bg-transparent px-4 py-1'>
				Professional
			</div>
		</div>
	);
};

export default Tabs;
