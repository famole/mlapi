import express from 'express';
import { 
	SEARCH,
	SEARCH_PRD_ID,
	SEARCH_PRD_DET,
	SEARCH_CAT,
	getApiData
} from './data/network_constants';
import { callService } from './network/network_layer';
import * as search from './controllers/search';

const router = express.Router();

router.route('/items')
	.get(function(req, res){
		callService(getApiData(SEARCH, req.query.q), function(err, data){
			if(err) {
				res.status(500).send({ error: err.message });
			} else {
				const items = search.itemsResult(data);
				if(!items.hasOwnProperty('error')) {
					callService(getApiData(SEARCH_CAT, items.breadcrumb), function(err, cat_list){
						res.send(search.item_cat_list(cat_list, items, null));
					});
				} else {
					res.send(items);
				}
			}
		});
	});

router.route('/items/:id')
	.get(function(req, res){
		callService(getApiData(SEARCH_PRD_ID, req.params.id), function(err, data){
			if(err) {
				res.status(500).send({ error: err.message });
			} else {
				let item = search.itemDetail(data);
				if(!item.hasOwnProperty('error')) {
					callService(getApiData(SEARCH_PRD_DET, data.id), function(err, description){
						item = search.itemDescDetail(description, item);
						if(!item.hasOwnProperty('error')) {
							callService(getApiData(SEARCH_CAT, item.item.category_id), function(err, cat_list){
								item = search.item_cat_list(cat_list, null, item);
								res.send(item);
							});
						}
					});
				} else {
					res.send(item);
				}
			}
		});
	});


export default router;
