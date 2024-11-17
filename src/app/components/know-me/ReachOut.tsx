'use client';

import { FunctionComponent, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AceternityButton from '@/components/ui/aceternity-button';
import { useTranslations } from 'next-intl';
import { useAction } from 'next-safe-action/hooks';
import { sendMessage } from '@/app/[locale]/know-me/actions';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';

interface ReachOutProps {}

const ReachOut: FunctionComponent<ReachOutProps> = () => {
	const ref = useRef<HTMLFormElement>(null);
	const { execute, isExecuting, result } = useAction(sendMessage);
	const t = useTranslations('KnowMePage');

	useEffect(() => {
		const { data, serverError } = result;
		if (serverError) toast.error(serverError);
		else if (data === 'Message sent successfully') {
			ref.current?.reset();
			toast.success(t('message-send-success'));
		}
	}, [result, t]);

	return (
		<div className='flex max-w-3xl flex-col gap-4 sm:gap-6 lg:w-full'>
			<h3 className='text-2xl font-medium sm:text-3xl'>{t('reach-out')}</h3>
			<form
				ref={ref}
				action={execute}
				className='grid grid-cols-1 gap-1 sm:gap-3 md:grid-cols-2'
			>
				<div className='grid w-full items-center gap-2 md:col-span-1'>
					<Input
						className='md:text-lg md:placeholder:text-lg'
						type='text'
						name='name'
						placeholder={t('name')}
					/>
					{result.validationErrors?.name?._errors?.map((error, idx) => (
						<Label
							key={idx}
							htmlFor='title'
							className='text-sm text-destructive'
						>
							{error}
						</Label>
					))}
				</div>
				<div className='grid w-full items-center gap-2 md:col-span-1'>
					<Input
						className='md:text-lg md:placeholder:text-lg'
						type='email'
						name='email'
						placeholder={t('email')}
					/>
					{result.validationErrors?.email?._errors?.map((error, idx) => (
						<Label
							key={idx}
							htmlFor='title'
							className='text-sm text-destructive'
						>
							{error}
						</Label>
					))}
				</div>
				<div className='grid w-full items-center gap-2 md:col-span-2'>
					<Input
						className='md:text-lg md:placeholder:text-lg'
						type='text'
						name='subject'
						placeholder={t('subject')}
					/>
					{result.validationErrors?.subject?._errors?.map((error, idx) => (
						<Label
							key={idx}
							htmlFor='title'
							className='text-sm text-destructive'
						>
							{error}
						</Label>
					))}
				</div>
				<div className='grid w-full items-center gap-2 md:col-span-2'>
					<Textarea
						className='md:text-lg md:placeholder:text-lg'
						name='content'
						placeholder={t('message')}
						rows={6}
					/>
					{result.validationErrors?.content?._errors?.map((error, idx) => (
						<Label
							key={idx}
							htmlFor='title'
							className='text-sm text-destructive'
						>
							{error}
						</Label>
					))}
				</div>
				<AceternityButton
					text={t('send-message-button')}
					className='mt-3 sm:place-self-end md:col-span-2'
					type='submit'
					disabled={isExecuting}
				/>
			</form>
		</div>
	);
};

export default ReachOut;
