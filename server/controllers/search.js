import { author } from '../data/global_constants';
import { parseItemPrice, sortByCategories } from '../utils/utils';

const FILTER_CATEGORY = 'category';

export const itemsResult = (data) => {
	let response = { author: author };
	let items = []
	let categories = []
	let cat_breadcrumb = '';
	if (Object.keys(data.results).length > 0) {
		for (let i = 0; i < data.results.length; i++) {
			const parsed_price = parseItemPrice(data.results[i].price);
			const item = {
				id: data.results[i].id,
				title: data.results[i].title,
				price: {
					currency: data.results[i].currency_id,
					amount: parsed_price.amount,
					decimals: parsed_price.decimals
				},
				picture: data.results[i].thumbnail,
				condition: data.results[i].condition,
				free_shipping: data.results[i].shipping.free_shipping
			};
			items.push(item);
			categories.push(data.results[i].category_id);
		}
		let cat_list = [];
		for (let i = 0; i < data.available_filters.length; i++) {
			if (data.available_filters[i].id === FILTER_CATEGORY) {
				cat_list = sortByCategories(data.available_filters[i].values);
				i = data.available_filters.length;
				cat_breadcrumb = cat_list[0].id;
			}
		}
	}
	return Object.assign({}, response, { categories: categories, items: items, breadcrumb: cat_breadcrumb });
};

export const itemDetail = (data) => {
	let response = { author: author };

	if (!data.hasOwnProperty('error')) {
		const parsed_price = parseItemPrice(data.price);
		const picture = data.pictures.length > 0 ? data.pictures[0].url : '';
		const item = {
			id: data.id,
			title: data.title,
			price: {
				currency: data.currency_id,
				amount: parsed_price.amount,
				decimals: parsed_price.decimals
			},
			picture: picture,
			condition: data.condition,
			free_shipping: data.free_shipping,
			sold_quantity: data.sold_quantity,
			category_id: data.category_id
		} 
		return Object.assign({}, response, { item: item });
	} else {
		return {
			error : data.error,
			message : data.message
		};
	}
	return Object.assign({}, response, { item: {} });
};

export const itemDescDetail = (data, response) => {
	if (!data.hasOwnProperty('error')) {
		const item = Object.assign({}, response.item, { description: data.plain_text });
		return Object.assign({}, response, { item });
	}
	return response;
};

export const item_cat_list = (data, parm_item_list, parm_item) => {
	let breadcrumb_list = [];
	if (!data.hasOwnProperty('error')) {
		if (data.path_from_root.length > 0) {
			for (let i = 0; i < data.path_from_root.length; i++) {
				breadcrumb_list.push(data.path_from_root[i].name)
			}
		}
	}
	return Object.assign({}, parm_item_list ? parm_item_list : parm_item, { path_from_root: breadcrumb_list });
};
