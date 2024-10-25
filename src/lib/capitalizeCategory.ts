export const capitalizeCategory = (val?: string): string => {
	if (!val) {
		return 'All';
	}

	return val.charAt(0).toUpperCase() + val.slice(1);
};
