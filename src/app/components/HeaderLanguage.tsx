'use client';

import { useRouter } from 'next/navigation';
import React, { FunctionComponent, useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

interface HeaderLanguageProps {
	locale?: 'US' | 'FR' | 'TR';
}

const HeaderLanguage: FunctionComponent<HeaderLanguageProps> = ({
	locale,
}) => {
	const [selected, setSelected] = useState<string>(locale ?? 'US');
	const router = useRouter();

	return (
		<ReactFlagsSelect
			countries={['US', 'FR', 'TR']}
			customLabels={{ US: 'EN', FR: 'FR', TR: 'TR' }}
			selected={selected}
			onSelect={(code) => {
				if (code === 'US') {
					router.push(`/en`);
				} else {
					router.push(`/${code.toLowerCase()}`);
				}
				setSelected(code);
			}}
		/>
	);
};

export default HeaderLanguage;
