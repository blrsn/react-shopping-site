import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductList from './product_list.jsx'
import ProductFilter from './product_filter.jsx'
import Cart from '../Cart/cart.jsx'

var data = require('../product_json.js')

class ProductListWithFilter extends Component {

	constructor(){
		super();
		this.state = { cart_items: {}, product_key_array: data.product_keys } 
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

	// Methods used to trigger cart updates.
	get_quantity(product_key){
		var cart_items = this.state.cart_items
		var quantiy = cart_items[product_key]

		if ( typeof quantiy == 'undefined' ) {
			return 0
		} else {
			return quantiy
		}
	}

	set_quantity(product_key, quantiy){
		var cart_items = this.state.cart_items

		if (quantiy > 10)
			return false

		cart_items[product_key] = quantiy

		this.setState( { cart_items: cart_items } )
	}

	add_to_cart(e) {
		var target_product_key = e.target.parentElement.getAttribute('data-sku');

		var cart_items = this.state.cart_items
		cart_items[target_product_key] += 1

		this.setState( { cart_items: cart_items } )
	}

	add_item(product_key){
		var quantity = this.get_quantity(product_key)
		this.set_quantity(product_key, quantity + 1)
	}


	render(){
		return(
			<div className='wrapper'>
				<div className='product-wrapper'> 
					<ProductFilter filterComponents={ this.filterComponents.bind(this) } />
					<ProductList product_key_array={ this.state.product_key_array } 
					             set_quantity={ this.set_quantity.bind(this) }
					             get_quantity= { this.get_quantity.bind(this) }/>
				</div>

				<div className='cart-wrapper'>
					<Cart cart_list={ this.state.cart_items } set_quantity={this.set_quantity.bind(this)} get_quantity={this.get_quantity.bind(this)}/>
				</div>
			</div>
		)
	}

}

export default ProductListWithFilter;