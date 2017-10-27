import { HTTPMethods } from './HTTPMethods';

export function search_items(q) {
  return {
    method: httpMethods.GET,
    path: `items?q=${q}`
  };
}

export function item(id) {
  return {
    method: httpMethods.GET,
    path: `items/${id}`
  };
}