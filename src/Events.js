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

	handleClick(event) {
		event.preventDefault();
		this.setState({
			events: []
		});
	}

	onDeleteElement(itemId, event){
		event.preventDefault();
		const filteredArrat = this.state.events.filter(item => item.id !== itemId);
		this.setState({
			events: filteredArrat
		});
	}

	render(){

		return(
			<ul>
					{this.state.events.map(item =>{

						const date = new Date(item.date);

						if (date <= Date.now()){
							return (
								<li key={item.id}>{item.name}Price:{item.id}
									<button onClick={this.onDeleteElement.bind(this, item.id)}>
										usuń
									</button>
								</li>
							);
						}
					})}
					<button onClick={this.handleClick}>
						Wyczyść wszystko
					</button>
				</ul>

		);
	}
};


export default Events;
