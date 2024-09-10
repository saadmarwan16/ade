import { FunctionComponent } from 'react';
import qs from 'qs';

interface HomeProps {
	searchParams: {
		sort?: string;
		filter?: string;
	};
}

const Home: FunctionComponent<HomeProps> = ({ searchParams }) => {
	let filter: boolean | undefined = undefined;
	if (searchParams.filter === 'completed') filter = true;
	if (searchParams.filter === 'uncompleted') filter = false;

	const query = qs.stringify(
		{
			sort: searchParams.sort,
			filters: {
				completed: {
					$eq: filter,
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	return null;
};

export default Home;
