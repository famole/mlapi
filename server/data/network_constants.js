export const SEARCH = 'search';
export const SEARCH_PRD_ID = 'prd_id';
export const SEARCH_PRD_DET = 'prd_det_id';
export const SEARCH_CAT = 'category';

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
			return Object.assign({}, apidata, { path: '/sites/MLA/search?q=' + encodeURI(q) + '&limit=' + SEARCH_LIMIT });
		case SEARCH_PRD_ID:
			return Object.assign({}, apidata, { path: '/items/' + q });
		case SEARCH_PRD_DET:
			return Object.assign({}, apidata, { path: '/items/' + q + '/description' });
		case SEARCH_CAT:
			return Object.assign({}, apidata, { path: '/categories/' + q });
		default:
			return apidata;
	}
}