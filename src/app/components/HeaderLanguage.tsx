import React, { FunctionComponent, useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

interface HeaderLanguageProps {}

const HeaderLanguage: FunctionComponent<HeaderLanguageProps> = () => {
	const [selected, setSelected] = useState('US');

	return (
		<ReactFlagsSelect
			countries={['US', 'FR', 'TR']}
			customLabels={{ US: 'EN', FR: 'FR', TR: 'TR' }}
			selected={selected}
			onSelect={(code) => setSelected(code)}
			className='hidden md:block'
		/>
	);
};

export default HeaderLanguage;
