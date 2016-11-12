import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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

export default ProductFilter;