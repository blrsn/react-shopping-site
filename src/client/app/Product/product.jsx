import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Product extends Component {

	add_to_cart(e){
		this.props.add_to_cart(e)
	}

	render(){

		var product = this.props.product;

		return(
			<div className='product' data-sku={ product.sku }>
				<div>name: { product.name }</div>
				<div>category: { product.category }</div>
				<div>price: { product.price }</div>
				<div className='brand-name'>brand: { product.brand }</div>
				<button onClick={ this.add_to_cart.bind(this) } >Add to cart</button>
			</div>
		);
	}
}

export default Product;