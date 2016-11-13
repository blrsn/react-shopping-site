import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import CartItem from './cart_item.jsx'
import CartTotal from './cart_total.jsx'

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
   							quantity={ props.cart_list[key] } 
   							set_quantity={ props.set_quantity }
   							get_quantity={ props.get_quantity }
   							/>
					})}
				
				</ul>

				<CartTotal cart_list= { props.cart_list }/>
			</div>
			)
	}
}


export default Cart;
