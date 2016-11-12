import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Product from './product.jsx'

var data = require('../product_json.js')

// Product List.
class ProductList extends Component{


	render() {
		var add_to_cart = this.props.add_to_cart

    	return (
      	<div>
        	{    this.props.product_key_array.map(function(key) {
   				    return <Product key={key} product={ data.product[key] } add_to_cart={ add_to_cart.bind( this ) }/>
				}) 
        	}
      	</div>
    )
  }


}

export default ProductList;