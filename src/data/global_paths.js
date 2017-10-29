import { browserHistory } from 'react-router';

export const ITEM_PATH='/items';

export function goToItemDetail(id) {
    return browserHistory.push(`${ITEM_PATH}/${id}`);
}