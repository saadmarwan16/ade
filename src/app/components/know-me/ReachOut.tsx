import { FunctionComponent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ReachOutProps {}

const ReachOut: FunctionComponent<ReachOutProps> = () => {
	return (
		<div className='flex max-w-3xl flex-col gap-4 sm:gap-6 lg:w-full'>
			<h3 className='text-2xl font-medium sm:text-3xl'>Reach out</h3>
			<form className='grid grid-cols-1 gap-1 sm:gap-3 md:grid-cols-2'>
				<Input
					className='md:col-span-1 md:text-lg md:placeholder:text-lg'
					type='text'
					placeholder='Name...'
				/>
				<Input
					className='md:col-span-1 md:text-lg md:placeholder:text-lg'
					type='email'
					placeholder='Email...'
				/>
				<Input
					className='md:col-span-2 md:text-lg md:placeholder:text-lg'
					type='text'
					placeholder='Subject...'
				/>
				<Textarea
					className='md:col-span-2 md:text-lg md:placeholder:text-lg'
					placeholder='Type your message here...'
				/>
				<Button className='mt-3 md:col-span-2 md:place-self-end'>
					Send Message
				</Button>
			</form>
		</div>
	);
};

export default ReachOut;
