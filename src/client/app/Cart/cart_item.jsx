import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuantityDropdown from './quantity_dropdown.jsx'

var data = require('../product_json.js')

class CartItem extends Component {
	constructor(props){
		super(props);
		
		this.state = { product: data.product[ this.props.product_key ],
					   quantity: this.props.quantity }
	}

	componentWillReceiveProps(nextprops) {
		this.setState( { product: data.product[ nextprops.product_key ],
					   quantity: nextprops.quantity } )

	}

	handleQuantityChange(e) {
		this.setState( { quantity: e.target.value } )


		var target_product_key = e.target.parentElement.parentElement.getAttribute('data-sku');
		var quantity = e.target.value;

		this.props.set_quantity_for_product( target_product_key, quantity )
	}


	render(){

		if (this.state.quantity > 0 ) {

			return(
				<li data-sku={ this.state.product.sku } key={ this.state.product.sku } >
					<div>name: {this.state.product.name}</div>
					<div>quantity: <QuantityDropdown select={this.state.quantity} handle_quantity_change={ this.handleQuantityChange.bind(this) }/></div>
					<div>price: {this.state.quantity * this.state.product.price} </div>
					<button data-sku={ this.state.product.sku } onClick={ this.props.remove_item.bind(this) }>Delete</button>  
				</li>
			)
		} else {
			return false;
		}
	}
}

export default CartItem;