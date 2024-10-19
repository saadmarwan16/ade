import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { HomeStickyScroll } from '@/components/ui/home-sticky-scroll-reveal';
import { TProjects } from '@/types/home_page';
import { constructImageLink } from '@/lib/constructLink';
import ExternalAceternityButton from '@/components/ui/external-aceternity-button';

interface ProjectsProps {
	projects: TProjects;
}

const Projects: FunctionComponent<ProjectsProps> = (props) => {
	const t = useTranslations('HomePage');
	const projects = props.projects.map((project) => ({
		category: project.type,
		title: project.title,
		link: project.link,
		description: project.description,
		image: constructImageLink(project.image.url),
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<Image
					src={constructImageLink(project.image.url)}
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt={`Project ${project.id}`}
				/>
			</div>
		),
	}));

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
						{project.link && (
							<ExternalAceternityButton
								text={t('learn-more-button')}
								link={project.link}
							/>
						)}

						<div className='relative mt-6 aspect-square max-h-[400px] w-full rounded-md'>
							<Image
								src={project.image}
								alt={project.title}
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
