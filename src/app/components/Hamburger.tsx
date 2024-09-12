import { FunctionComponent } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

interface HamburgerProps {}

const Hamburger: FunctionComponent<HamburgerProps> = () => {
	return (
		<div className='cursor-pointer rounded-full border border-gray-600 p-1 md:hidden'>
			<RxHamburgerMenu className='text-3xl' />
		</div>
	);
};

export default Hamburger;
