import { FunctionComponent } from 'react';
import { Permanent_Marker } from 'next/font/google';

interface HeaderNameProps {}

const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
});

const HeaderName: FunctionComponent<HeaderNameProps> = () => {
	return (
		<h2 className={`${permanentMarker.className} text-4xl`}>
			ADE.
		</h2>
	);
};

export default HeaderName;
