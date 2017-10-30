export const SEARCH = 'search';
export const SEARCH_PRD_ID = 'prd_id';
export const SEARCH_PRD_DET = 'prd_det_id';

// Se establece este limite como constante dado que por letra no se requiere limite o paginado por URL, lo mejor seria
// recibirlo como un parametro mas en la url.
const SEARCH_LIMIT = '4';

const apidata = {
	hostname: 'api.mercadolibre.com',
	port: 443,
	method: 'GET'
};

export function getApiData(type, q) {
	switch (type) {
		case SEARCH:
			console.log("search");
			console.log(q);
			return Object.assign({}, apidata, { path: '/sites/MLA/search?q=' + encodeURI(q) + '&limit=' + SEARCH_LIMIT });
		case SEARCH_PRD_ID:
			return Object.assign({}, apidata, { path: '/items/' + q });
		case SEARCH_PRD_DET:
			return Object.assign({}, apidata, { path: '/items/' + q + '/description' });
		default:
			return apidata;
	}
}