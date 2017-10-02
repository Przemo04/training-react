import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class State extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			count: 10,
			name: "Lorem"
		}
	}


	render(){

		return(
			<div>
				<p>This state: {this.state.count}</p>
				<button onClick={() => this.setState({ count: this.state.count + 4 })}>
					add
				</button>
			</div>
		);
	}
};


export default State;
