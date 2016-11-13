import React, {Component} from 'react';
import ReactDOM from 'react-dom';

var data = require('../product_json.js')

class CartTotal extends Component {

	get_total(cart_list, product_list) {

		var total_price = 0
		var num_items = 0

		Object.keys(cart_list).forEach(function(key, index) {
			var product = product_list[key];
			var quantity = cart_list[key];
			var product_price = product.price;

			if (quantity != 0) {
				total_price += product_price * quantity;
				num_items += quantity;
			}

		})

		return { price: total_price, item_count: num_items }

	}
	

	render(){
		var product_list = data.product
		var cart_list = this.props.cart_list

		var total = this.get_total(cart_list, product_list)

		if (total.item_count == 0) {
			return false
		} 
			
		return(
				<div className='cart-total'>
					Sub-total ( {total.item_count} items ) : Rs. { total.price }
				</div>
		)
	}


		

}

export default CartTotal;