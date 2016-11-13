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

	handleQuantityChange(product_key, e) {
		var quantity = parseInt(e.target.value) ;
		this.props.set_quantity(product_key, quantity )
	}

	remove_item(product_key){
		this.props.set_quantity(product_key, 0)
	}

	render(){

		var product = this.state.product;
		var quantity = this.state.quantity;

		if (this.state.quantity > 0 ) {

			return(
				<li className='cart-item'>
					<div className='img-name' className='cart-child'>
						<img src={ product.img_link } alt="Smiley face" width='65px'></img>
						<div>{ product.name }</div>
						<a onClick={ this.remove_item.bind(this, product.sku) }>Delete</a>
					</div>

					<div className='cart-child'>quantity: <QuantityDropdown select={this.state.quantity} handle_quantity_change={ this.handleQuantityChange.bind(this, product.sku ) }/></div>

					<div className='cart-child' className='price'>Rs.{ quantity * product.price } </div>
				</li>
			)
		} else {
			return false;
		}
	}
}

export default CartItem;