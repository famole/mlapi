import { combineReducers } from 'redux';
import items_reducer from './items_reducer';
import todo from './todo';

const ml_reducers = combineReducers ({
    items_state: items_reducer,
    todo: todo    
});

export default ml_reducers;
