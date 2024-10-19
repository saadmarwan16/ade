import React, { FunctionComponent } from 'react';

interface ExternalAceternityButtonProps {
	text: string;
	link: string;
	className?: string;
}

const ExternalAceternityButton: FunctionComponent<
	ExternalAceternityButtonProps
> = ({ text, link, className }) => {
	return (
		<a
			href={link}
			target='_blank'
			className={`relative inline-block p-[3px] ${className}`}
		>
			<div className='absolute inset-0 rounded-lg bg-gradient-to-r from-[#B18733] via-[#9B6D22] to-[#6F3800]' />
			<div className='group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent'>
				{text}
			</div>
		</a>
	);
};

export default ExternalAceternityButton;
