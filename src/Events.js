import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';

class Events extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			events: []
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		this.setState({
			events
		});
	}
	handleClick(event) {
		event.preventDefault();
		this.setState({
			events: []
		});
	}

	render(){

		return(
			<ul>
					{this.state.events.map(item =>{

						const date = new Date(item.date);

						if (date <= Date.now()){
							return (
								<li key={item.id}>{item.name}Price:{item.id}</li>
							);
						}
					})}
					<button onClick={this.handleClick}>
						Wyczysc
					</button>
				</ul>
		);
	}
};


export default Events;
