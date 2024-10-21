export type Category =
	| 'All'
	| 'Personal'
	| 'Professional'
	| 'Social'
	| 'Political';

export const capitalizeCategory = (val?: string): Category => {
	if (!val) {
		return 'All';
	}

	const capitalized = val.charAt(0).toUpperCase() + val.slice(1);
	if (
		['All', 'Personal', 'Professional', 'Social', 'Political'].includes(
			capitalized
		)
	) {
		return capitalized as Category;
	} else {
		return 'All';
	}
};
