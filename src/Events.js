import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';

class Events extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			events: []
		};
	}
	componentDidMount() {
		this.setState({
			events
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
				</ul>
		);
	}
};


export default Events;
