import { combineReducers, createStore } from 'redux';
import { cardReducer } from '../reducers/list.reducer';

const reducers = combineReducers({
	cardReducer,
});

const store = createStore(reducers);

export default store;
