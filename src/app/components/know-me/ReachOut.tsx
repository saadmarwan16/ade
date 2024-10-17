import { FunctionComponent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AceternityButton from '@/components/ui/aceternity-button';
import { useTranslations } from 'next-intl';

interface ReachOutProps {}

const ReachOut: FunctionComponent<ReachOutProps> = () => {
	const t = useTranslations('KnowMePage');

	return (
		<div className='flex max-w-3xl flex-col gap-4 sm:gap-6 lg:w-full'>
			<h3 className='text-2xl font-medium sm:text-3xl'>{t('reach-out')}</h3>
			<form className='grid grid-cols-1 gap-1 sm:gap-3 md:grid-cols-2'>
				<Input
					className='md:col-span-1 md:text-lg md:placeholder:text-lg'
					type='text'
					placeholder={t('name')}
				/>
				<Input
					className='md:col-span-1 md:text-lg md:placeholder:text-lg'
					type='email'
					placeholder={t('email')}
				/>
				<Input
					className='md:col-span-2 md:text-lg md:placeholder:text-lg'
					type='text'
					placeholder={t('subject')}
				/>
				<Textarea
					className='md:col-span-2 md:text-lg md:placeholder:text-lg'
					placeholder={t('message')}
					rows={6}
				/>
				<AceternityButton
					text={t('send-message-button')}
					className='mt-3 sm:place-self-end md:col-span-2'
				/>
			</form>
		</div>
	);
};

export default ReachOut;
