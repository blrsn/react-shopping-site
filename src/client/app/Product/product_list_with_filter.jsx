import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductList from './product_list.jsx'
import ProductFilter from './product_filter.jsx'
import Cart from '../Cart/cart.jsx'

var data = require('../product_json.js')

class ProductListWithFilter extends Component {

	constructor(){
		super();

		var cart_list  = {};

		for(var i = 0, l = data.product_keys.length; i < l; i++) {
			var product_key =  data.product_keys[i]

    		cart_list[product_key] = 0;
		}

		this.state = { cart_items: cart_list, product_key_array: data.product_keys } 
	}

	filterComponents(e) {
		let _ = require('underscore');

		var typed_value = e.target.value;
		var regex = new RegExp(typed_value, "i");

		var filtered_keys = _.filter(data.product_keys, function(key) {
			var product = data.product[key];

			var product_attributes_array = Object.values(product);

			var found = _.find( product_attributes_array, function(attribute){
				attribute = attribute.toString();
				return attribute.match(regex);
			})

			if (typeof found != 'undefined') {
				return true
			} else {
				return false
			}

		} )
		
		this.setState( { product_key_array: filtered_keys} )
	}

	add_to_cart(e) {
		var target_product_key = e.target.parentElement.getAttribute('data-sku');

		var cart_items = this.state.cart_items
		cart_items[target_product_key] += 1

		this.setState( { cart_items: cart_items } )
	}


	remove_item(e){
		var target_product_key = e.target.parentElement.getAttribute('data-sku');
		var cart_items = this.state.cart_items
		cart_items[target_product_key] = 0

		this.setState( { cart_items: cart_items } )
	}

	set_quantity_for_product(product_key, quantity){
		this.state.cart_items.product_key = quantity;
	}
	

	render(){
		return(
			<div>
				<ProductFilter filterComponents={ this.filterComponents.bind(this) } />
				<ProductList product_key_array={ this.state.product_key_array } add_to_cart={ this.add_to_cart.bind(this) }/>
				<Cart cart_list={ this.state.cart_items } remove_item={ this.remove_item.bind(this) } set_quantity_for_product={ this.set_quantity_for_product.bind(this) }/>
			</div>
		)
	}

}

export default ProductListWithFilter;