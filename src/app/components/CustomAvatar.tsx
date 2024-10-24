import { Routes } from '@/lib/routes';
import { FunctionComponent } from 'react';
import HeaderName from './HeaderName';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { constructImageLink } from '@/lib/constructLink';
import { TAvatar } from '@/types/meta';

interface CustomAvatarProps {
	avatar: TAvatar;
}

const CustomAvatar: FunctionComponent<CustomAvatarProps> = ({ avatar }) => {
	return (
		<Link
			href={Routes.HOME}
			className='flex w-fit items-center gap-2 duration-500 hover:scale-105 md:gap-4'
		>
			<div className='relative aspect-square w-12 rounded-full md:w-16'>
				<Image
					src={constructImageLink(avatar.image.url)}
					alt={avatar.alt}
					className='rounded-full'
					fill
				/>
			</div>

			<HeaderName />
		</Link>
	);
};

export default CustomAvatar;
