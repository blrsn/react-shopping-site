import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Product extends Component {

	add_item_to_cart(product_key){
		var quantity = this.props.get_quantity(product_key)
		this.props.set_quantity(product_key, quantity + 1)
	}

	render(){

		var product = this.props.product;

		return(
			<div className='product'>
				<img src={ product.img_link } alt="Smiley face" height="100" width="100"></img>
				<div className='name'>{ product.name }</div>
				<div className='brand-name'>by { product.brand }</div>
				<div className='price'>₹{ product.price }</div>
				<button onClick={ this.add_item_to_cart.bind(this, product.sku) } >Add to cart</button>
			</div>
		);
	}
}

export default Product;