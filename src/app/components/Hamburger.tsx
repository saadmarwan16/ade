'use client';

import { FunctionComponent } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Drawer } from 'vaul';
import { IoMdClose } from 'react-icons/io';
import { Routes } from '@/lib/routes';
import HeaderLanguage from './HeaderLanguage';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface HamburgerProps {}

const Hamburger: FunctionComponent<HamburgerProps> = () => {
	const t = useTranslations('Shared');

	return (
		<Drawer.Root direction='right'>
			<Drawer.Trigger asChild>
				<div className='cursor-pointer rounded-full border border-gray-600 p-1 md:hidden'>
					<RxHamburgerMenu className='text-3xl' />
				</div>
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className='fixed inset-0 bg-black/40' />
				<Drawer.Content className='fixed bottom-0 right-0 z-10 mt-24 flex h-full w-[280px] flex-col rounded-t-[10px] bg-white sm:w-[400px]'>
					<div className='h-full flex-1 bg-white p-4'>
						<div className='mx-auto max-w-md'>
							<div className='w-full'>
								<Drawer.Title className='flex justify-end'>
									<Drawer.Trigger asChild>
										<IoMdClose className='cursor-pointer text-4xl sm:text-5xl' />
									</Drawer.Trigger>
								</Drawer.Title>

								<div className='my-16 flex w-fit flex-col gap-2 text-3xl'>
									<Drawer.Trigger asChild>
										<Link
											className='duration-500 hover:scale-105'
											href={Routes.HOME}
										>
											{t('home')}
										</Link>
									</Drawer.Trigger>
									<Drawer.Trigger asChild>
										<Link
											className='duration-500 hover:scale-105'
											href={Routes.ACTIVITIES}
										>
											{t('activities')}
										</Link>
									</Drawer.Trigger>
									<Drawer.Trigger asChild>
										<Link
											className='duration-500 hover:scale-105'
											href={Routes.GALLERY}
										>
											{t('galleries')}
										</Link>
									</Drawer.Trigger>
									<Drawer.Trigger asChild>
										<Link
											className='duration-500 hover:scale-105'
											href={Routes.KNOW_ME}
										>
											{t('know-me')}
										</Link>
									</Drawer.Trigger>
								</div>
							</div>

							<HeaderLanguage />
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
};

export default Hamburger;
