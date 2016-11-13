import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class QuantityDropdown extends Component {

	constructor(props){
		super(props);
		
		this.state = { select: this.props.select, range: [1,2,3,4,5,6,7,8,9,10] }
	}

	componentWillReceiveProps(nextprops) {
		this.setState( { select: nextprops.select } )
	}

	render(){
		return(
				<select value={this.get_select_value()} onChange={ this.props.handle_quantity_change.bind(this) } >
					{ this.state.range.map(function(i) {
									return <option key={i} value={i}> {i} </option>
							})}
				</select>
			)
	}

	get_select_value(){
		var last_value = this.state.range[this.state.range.length - 1]
		if ( this.state.select > last_value ) {
			return last_value
		}
		else { return this.state.select }

	}
}

export default QuantityDropdown;