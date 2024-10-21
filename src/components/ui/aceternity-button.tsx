import { Link, Pathnames } from '@/i18n/routing';
import React, { FunctionComponent } from 'react';

interface AceternityButtonProps {
	text: string;
	disabled?: boolean;
	link?: Pathnames;
	onClick?: () => void;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
}

const AceternityButton: FunctionComponent<AceternityButtonProps> = ({
	text,
	disabled,
	link,
	onClick,
	className,
	type = 'button',
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
				<button
					className={`relative p-[3px] ${className}`}
					onClick={onClick}
					type={type}
				>
					<div className='absolute inset-0 rounded-lg bg-gradient-to-r from-[#B18733] via-[#9B6D22] to-[#6F3800]' />
					<div
						className={`group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent ${disabled && '!cursor-not-allowed !bg-gray-300 !text-black'}`}
					>
						{text}
					</div>
				</button>
			)}
		</>
	);
};

export default AceternityButton;
