import express from 'express';
import { 
	SEARCH,
	SEARCH_PRD_ID,
	SEARCH_PRD_DET,
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
				res.send(items);
			}
		});
	});

router.route('/items/:id')
	.get(function(req, res){
		callService(getApiData(SEARCH_PRD_ID, req.params.id), function(err, data){
			if(err) {
				res.status(500).send({ error: err.message });
			} else {
				const item = search.itemDetail(data);
				if(!item.hasOwnProperty('error')) {
					callService(getApiData(SEARCH_PRD_DET, data.id), function(err, description){
						res.send(search.itemDescDetail(description, item));						
					});
				} else {
					res.send(item);
				}
			}
		});
	});


export default router;
