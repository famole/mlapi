import * as search_actions from '../actions/search_actions';
import { SEARCH_ITEMS, GET_ITEM } from '../actions/action_types';

export default function search_reducer(
	current_state = {
		items: []
	}, action) {
		const state = Object.assign({}, currentState);

		switch (action.type) {
			case SEARCH_ITEMS:
			{
				return state;
			}
			case GET_ITEM:
			{
				return state;
			}
		}
}
