import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import CartItem from './cart_item.jsx'

var data = require('../product_json.js')

class Cart extends Component {
	

	render(){
		var props = this.props

		return(
			<div>
				<ul>
				
					{ Object.keys(props.cart_list).map(function(key) {
   						return <CartItem 
   							key={key} 
   							product_key={key}
   							quantity={props.cart_list[key]} 
   							remove_item={ props.remove_item.bind(this) } 
   							set_quantity_for_product={ props.set_quantity_for_product.bind(this) }/>
					})}
				
				</ul>
			</div>
			)
	}
}


export default Cart;
