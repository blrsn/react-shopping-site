import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import underscore from 'underscore'
import ProductListWithFilter from './Product/product_list_with_filter.jsx'

// // Initializing a hash with product details.
// let PRODUCT_HASH = {	"SD2014-CF-P":{
// 							"category": "electronics",
// 							"name":"Nexus 6",
// 							"price": 3500,
// 							"brand": "LG",
// 							"sku": "SD2014-CF-P"
// 						},
// 						"SD2015-CF-P":{
// 							"category": "electronics",
// 							"name":"Apple Watch",
// 							"price": 6000,
// 							"brand":"Apple",
// 							"sku":"SD2015-CF-P"
// 						},
// 						"SD2016-CF-P":{
// 							"category": "electronics",
// 							"name":"Havels Switch",
// 							"price": 120,
// 							"brand":"Havels",
// 							"sku":"SD2016-CF-P"
// 						},
// 						"SD2017-CF-P":{
// 							"category": "electronics",
// 							"name":"Laser Mouse",
// 							"price": 450,
// 							"brand":"Logitech",
// 							"sku":"SD2017-CF-P"
// 						},
// 						"SD2018-CF-P":{
// 							"category": "electronics",
// 							"name":"Mini Keyboard",
// 							"price": 850,
// 							"brand":"Logitech",
// 							"sku":"SD2018-CF-P"
// 						},
// 						"SD2019-CF-P":{
// 							"category": "clothing",
// 							"name":"Tracks",
// 							"price": 120,
// 							"brand":"Nike",
// 							"sku":"SD2019-CF-P"
// 						},
// 						"SD2020-CF-P":{
// 							"category": "clothing",
// 							"name":"Swim Suit",
// 							"price": 120,
// 							"brand":"Puma",
// 							"sku":"SD2020-CF-P"
// 						}
// 					}

// let PRODUCT_KEYS = Object.keys( PRODUCT_HASH )





ReactDOM.render(<ProductListWithFilter />, document.getElementById('root'));
