export function parseItemPrice(price) {
    const str_price = price.toString().split('.');
		const parsed_price = {
      amount: parseInt(str_price[0]),
      decimals: str_price.length > 1 ? parseInt(str_price[1]) : 0
    };
    return parsed_price;
}