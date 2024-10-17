import { FunctionComponent } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

interface SocialsProps {}

const Socials: FunctionComponent<SocialsProps> = () => {
	const t = useTranslations('ActivityDetailsPage');

	return (
		<div className='flex justify-center'>
			<div className='flex w-full max-w-4xl flex-col gap-2'>
				<span className='text-lg font-medium'>{t('share')}: </span>
				<div className='flex flex-wrap gap-3 sm:hidden'>
					<Button variant='outline' size='sm'>
						Linkedin
					</Button>
					<Button variant='outline' size='sm'>
						Facebook
					</Button>
					<Button variant='outline' size='sm'>
						X
					</Button>
				</div>
				<div className='hidden flex-wrap gap-3 sm:flex lg:hidden'>
					<Button variant='outline' size='default'>
						Linkedin
					</Button>
					<Button variant='outline' size='default'>
						Facebook
					</Button>
					<Button variant='outline' size='default'>
						X
					</Button>
				</div>
				<div className='hidden flex-wrap gap-3 lg:flex'>
					<Button variant='outline' size='lg'>
						Linkedin
					</Button>
					<Button variant='outline' size='lg'>
						Facebook
					</Button>
					<Button variant='outline' size='lg'>
						X
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Socials;
