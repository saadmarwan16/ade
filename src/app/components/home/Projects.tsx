import { FunctionComponent } from 'react';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Routes } from '@/lib/routes';
import { HomeStickyScroll } from '@/components/ui/home-sticky-scroll-reveal';

interface ProjectsProps {}

const projects = [
	{
		category: 'Projects',
		title: 'Partnering with PROV',
		link: Routes.KNOW_ME,
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed cupiditate nostrum. Lorem ipsum dolor sit,\
             amet consectetur adipisicing elit. Sed cupiditate nostrum.',
		image: '/me-1.jpg',
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
		category: 'Companies',
		title: 'Selling medical equipments and providing medical tourism',
		link: Routes.KNOW_ME,
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed cupiditate nostrum. Lorem ipsum dolor sit,\
             amet consectetur adipisicing elit. Sed cupiditate nostrum.',
		image: '/me-2.jpg',
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
		category: 'NGOs',
		title: 'Helping woman in Africa gain access to health care',
		link: Routes.KNOW_ME,
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed cupiditate nostrum. Lorem ipsum dolor sit,\
             amet consectetur adipisicing elit. Sed cupiditate nostrum.',
		image: '/me-1.jpg',
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
];

const Projects: FunctionComponent<ProjectsProps> = () => {
	return (
		<>
			<div className='hidden w-full lg:block'>
				<HomeStickyScroll content={projects} />
			</div>
			<div className='-mx-5 flex flex-col gap-12 bg-gray-200/40 px-5 py-12 backdrop-blur-sm sm:-mx-8 sm:px-8 lg:hidden'>
				{projects.map((project, idx) => (
					<div key={idx} className='flex w-full flex-col items-start gap-2'>
						<span className='font-medium text-blue-600 sm:text-lg md:text-xl'>
							{project.category}
						</span>
						<h3 className='text-2xl font-semibold sm:text-3xl'>
							{project.title}
						</h3>
						<p className='text-base sm:text-lg md:text-xl'>
							{project.description}
						</p>

						<Link
							href={project.link}
							className={buttonVariants({ variant: 'default' })}
						>
							Learn more
						</Link>

						<div className='relative mt-6 aspect-square max-h-[400px] w-full rounded-md'>
							<Image
								src={project.image}
								alt='Helping woman in Africa gain access to health care'
								className='rounded-md'
								fill
							/>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Projects;
