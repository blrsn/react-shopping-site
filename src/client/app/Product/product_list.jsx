import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Product from './product.jsx'

var data = require('../product_json.js')

// Product List.
class ProductList extends Component{

	render() {
    var props = this.props;

    	return (
      	<div>
          {   props.product_key_array.map(function(key) {
                var product = data.product[key];

     				    return <Product key={key} 
                                product={product}
                                set_quantity={ props.set_quantity.bind(this) } 
                                get_quantity={ props.get_quantity.bind(this) } />
  				    }) 
        	}
      	</div>
      )
  }


}

export default ProductList;