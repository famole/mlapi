import * as search_actions from '../actions/search_actions';
import { SEARCH_ITEMS, GET_ITEM, FIND_ITEM } from '../actions/action_types';

export default function items_reducer(
	state = {
		categories: [],
		items: [],
		search: undefined
	}, action) {

		switch (action.type) {
			case SEARCH_ITEMS:
			{
				return Object.assign({}, state, { categories: action.data.categories, items: action.data.items });
			}
			case GET_ITEM:
			{
				console.log(action.data);
				return state;
			}
			case FIND_ITEM:
			{
				return Object.assign({}, state, { search: action.data });
			}
		}
		return state;
}
