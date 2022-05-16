export const validateName = (name) => {
	if (name.length < 1) {
		return 'This field in required';
	}
	if (!name.match(/^[a-zA-Z]+$/)) {
		return 'Only letters allowed';
	}
	return '';
};
