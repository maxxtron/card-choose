import { GET_LIST } from '../types/types';

let initialState = {
	list: {},
};

export const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST:
			return {
				...state,
				list: action.payload,
			};
		default:
			return {
				...state,
			};
	}
};
