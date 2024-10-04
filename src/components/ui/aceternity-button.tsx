import { Route } from 'next';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface AceternityButtonProps {
	text: string;
	link?: Route;
	onClick?: () => void;
	className?: string;
}

const AceternityButton: FunctionComponent<AceternityButtonProps> = ({
	text,
	link,
	onClick,
	className,
}) => {
	return (
		<>
			{link ? (
				<Link
					href={link}
					className={`relative inline-block p-[3px] ${className}`}
				>
					<div className='absolute inset-0 rounded-lg bg-gradient-to-r from-[#B18733] via-[#9B6D22] to-[#6F3800]' />
					<div className='group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent'>
						{text}
					</div>
				</Link>
			) : (
				<button className={`relative p-[3px] ${className}`} onClick={onClick}>
					<div className='absolute inset-0 rounded-lg bg-gradient-to-r from-[#B18733] via-[#9B6D22] to-[#6F3800]' />
					<div className='group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent'>
						{text}
					</div>
				</button>
			)}
		</>
	);
};

export default AceternityButton;
