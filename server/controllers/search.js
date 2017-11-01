import { author } from '../data/global_constants';
import { parseItemPrice } from '../utils/utils';

export const itemsResult = (data) => {
	let response = { author: author };
	let items = []
	let categories = []
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
	}
	return Object.assign({}, response, { categories: categories, items: items });
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
			sold_quantity: data.sold_quantity
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