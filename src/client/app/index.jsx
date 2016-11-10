import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import underscore from 'underscore'

// Initializing a hash with product details.
var PRODUCT_HASH = {	"SD2014-CF-P":{
							"category": "electronics",
							"name":"Nexus 6",
							"price": 3500,
							"brand": "LG",
							"sku": "SD2014-CF-P"
						},
						"SD2015-CF-P":{
							"category": "electronics",
							"name":"Apple Watch",
							"price": 6000,
							"brand":"Apple",
							"sku":"SD2015-CF-P"
						},
						"SD2016-CF-P":{
							"category": "electronics",
							"name":"Havels Switch",
							"price": 120,
							"brand":"Havels",
							"sku":"SD2016-CF-P"
						},
						"SD2017-CF-P":{
							"category": "electronics",
							"name":"Laser Mouse",
							"price": 450,
							"brand":"Logitech",
							"sku":"SD2017-CF-P"
						},
						"SD2018-CF-P":{
							"category": "electronics",
							"name":"Mini Keyboard",
							"price": 850,
							"brand":"Logitech",
							"sku":"SD2018-CF-P"
						},
						"SD2019-CF-P":{
							"category": "clothing",
							"name":"Tracks",
							"price": 120,
							"brand":"Nike",
							"sku":"SD2019-CF-P"
						},
						"SD2020-CF-P":{
							"category": "clothing",
							"name":"Swim Suit",
							"price": 120,
							"brand":"Puma",
							"sku":"SD2020-CF-P"
						}
					}

var PRODUCT_KEYS = Object.keys( PRODUCT_HASH )

// Product List.
class ProductList extends Component{

	constructor(){
		super();		
	}



	render() {
		var add_to_cart = this.props.add_to_cart

    	return (
      	<div>
        	{    this.props.product_key_array.map(function(key) {
   				    return <Product key={key} product={ PRODUCT_HASH[key] } add_to_cart={ add_to_cart.bind( this ) }/>
				}) 
        	}
      	</div>
    )
  }


}

class Product extends Component {

	add_to_cart(e){

		this.props.add_to_cart(e)
	}

	render(){
		return(
			<div className='product'>
				<div>name: {this.props.product.name}</div>
				<div>category: {this.props.product.category}</div>
				<div>price: {this.props.product.price}</div>
				<div className='brand-name'>brand: {this.props.product.brand}</div>
				<button onClick={ this.add_to_cart.bind(this) } data-sku={ this.props.product.sku }>Add to cart</button>
			</div>
		);
	}
}

class ProductFilter extends Component {

	filter(e){
		this.props.filterComponents(e)
	}

	render(){
		return(
			<div>
				<label>Search product</label>
				<input type='text' onKeyUp={ this.filter.bind(this) }></input>
			</div>
		)
	}
}

class ProductListWithFilter extends Component {

	constructor(){
		super();

		var cart_list  = {};

		for(var i = 0, l = PRODUCT_KEYS.length; i < l; i++) {
			var product_key =  PRODUCT_KEYS[i]

    		cart_list[product_key] = 0;
		}

		this.state = { cart_items: cart_list, product_key_array: PRODUCT_KEYS } 
	}

	filterComponents(e) {
		let _ = require('underscore');

		var typed_value = e.target.value;
		var regex = new RegExp(typed_value, "i");

		var filtered_keys = _.filter(PRODUCT_KEYS, function(key) {
			var product = PRODUCT_HASH[key];

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
		var target_product_key = e.target.getAttribute('data-sku');

		var cart_items = this.state.cart_items
		cart_items[target_product_key] += 1

		// Object.keys(cart_items).map(function(key){
  //   		cart_items[key] += 1;
		// })


		this.setState( { cart_items: cart_items } )
	}


	remove_item(e){
		var target_product_key = e.target.getAttribute('data-sku');
		var cart_items = this.state.cart_items
		cart_items[target_product_key] = 0

		this.setState( { cart_items: cart_items } )
	}
	

	render(){
		return(
			<div>
				<ProductFilter filterComponents={ this.filterComponents.bind(this) } />
				<ProductList product_key_array={ this.state.product_key_array } add_to_cart={ this.add_to_cart.bind(this) }/>
				<Cart cart_list={ this.state.cart_items } remove_item={ this.remove_item.bind(this) } />
			</div>
		)
	}

}

class Cart extends Component {
	constructor(props){
		super(props);
	}


	render(){
		var props = this.props

		return(
			<div>
				<ul>
				
					{ Object.keys(props.cart_list).map(function(key) {
   						return <CartItem product_key={key} quantity={props.cart_list[key]} remove_item={ props.remove_item.bind(this) }/>
					})}
				
				</ul>
			</div>
			)
	}
}

class CartItem extends Component {
	constructor(props){
		super(props);
		
		this.state = { product: PRODUCT_HASH[ this.props.product_key ],
					   quantity: this.props.quantity }
	}

	componentWillReceiveProps(nextprops) {
		this.setState( { product: PRODUCT_HASH[ nextprops.product_key ],
					   quantity: nextprops.quantity } )

	}


	render(){

		if (this.state.quantity > 0 ) {
			return(
				<li>
					<div>name: {this.state.product.name}</div>
					<div>quantity: {this.state.quantity}</div>
					<button data-sku={ this.state.product.sku } onClick={ this.props.remove_item.bind(this) }>remove</button>  
				</li>
			)
		} else {
			return false;
		}
	}
}

ReactDOM.render(<ProductListWithFilter />, document.getElementById('root'));
