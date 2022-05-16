export const validatePhone = (phone) => {
	if (phone.length === 0) {
		return 'This field in required';
	}
	if (!phone?.replace(' ', '').match(/^[0-9 ()+-]+$/)) {
		return 'Only numbers allowed';
	}
	if (phone.length !== 12) {
		return 'Should contain 12 characters';
	}

	return '';
};
