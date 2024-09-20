import { FunctionComponent } from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

interface ContentProps {}

const content = [
	{
		title: 'Who I am',
		description:
			' \
				Lorem ipsum dolor sit amet consectetur adipisicing elit. \
				Voluptate mollitia quidem, delectus vel voluptatibus accusamus \
				quibusdam velit quia perferendis! Maiores molestias aliquid, \
				vitae velit suscipit aut nobis fuga excepturi quas. \
			',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<Image
					src='/me-1.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'What I do',
		description:
			' \
				Lorem ipsum dolor sit amet consectetur adipisicing elit. \
				Voluptate mollitia quidem, delectus vel voluptatibus accusamus \
				quibusdam velit quia perferendis! Maiores molestias aliquid, \
				vitae velit suscipit aut nobis fuga excepturi quas. \
			',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<Image
					src='/me-2.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Education',
		description:
			' \
				Lorem ipsum dolor sit amet consectetur adipisicing elit. \
				Voluptate mollitia quidem, delectus vel voluptatibus accusamus \
				quibusdam velit quia perferendis! Maiores molestias aliquid, \
				vitae velit suscipit aut nobis fuga excepturi quas. \
			',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<Image
					src='/me-1.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Work experience',
		description:
			' \
				Lorem ipsum dolor sit amet consectetur adipisicing elit. \
				Voluptate mollitia quidem, delectus vel voluptatibus accusamus \
				quibusdam velit quia perferendis! Maiores molestias aliquid, \
				vitae velit suscipit aut nobis fuga excepturi quas. \
			',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<Image
					src='/me-2.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Mission',
		description:
			' \
				Lorem ipsum dolor sit amet consectetur adipisicing elit. \
				Voluptate mollitia quidem, delectus vel voluptatibus accusamus \
				quibusdam velit quia perferendis! Maiores molestias aliquid, \
				vitae velit suscipit aut nobis fuga excepturi quas. \
			',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<Image
					src='/me-1.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Vision',
		description:
			' \
				Lorem ipsum dolor sit amet consectetur adipisicing elit. \
				Voluptate mollitia quidem, delectus vel voluptatibus accusamus \
				quibusdam velit quia perferendis! Maiores molestias aliquid, \
				vitae velit suscipit aut nobis fuga excepturi quas. \
			',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<Image
					src='/me-2.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
];

const Content: FunctionComponent<ContentProps> = () => {
	return (
		<>
			<div className='hidden w-full lg:block'>
				<StickyScroll content={content} />
			</div>
			<div className='-mx-5 flex flex-col gap-6 bg-gray-200/40 px-5 py-8 backdrop-blur-sm sm:-mx-8 sm:px-8 sm:py-10 lg:hidden'>
				{content.map((item, index) => (
					<div key={index} className='flex flex-col gap-1'>
						<h4 className='text-2xl font-medium sm:text-3xl'>{item.title}</h4>
						<p className='text-gray-600 sm:text-lg'>{item.description}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Content;
