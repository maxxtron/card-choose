import { GET_LIST } from '../types/types';

export const getList = (payload) => ({
	type: GET_LIST,
	payload,
});
