import { useState, useEffect } from 'react';

export const useValidate = (value, validator, validate) => {
	const [message, setMessage] = useState('');

	useEffect(() => {
		if (validate) {
			setMessage(validator(value));
		}
	}, [value, validate, validator]);

	return message;
};
