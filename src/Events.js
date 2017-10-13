import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';

import EventItem from './EventItem';
import EventsFilter from './EventsFilter';

class Events extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			events: [],
			filter: ''
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

	onChange(event){
		const value = event.currentTarget.value;
		this.setState({
			filter: value
		});
	}

	render(){

		return(
			<ul>
					<EventsFilter value={this.state.filter} onChange={this.onChange.bind(this)}></EventsFilter>
					{this.state.events.map(item =>{

						const date = new Date(item.date);

						if (date <= Date.now() && item.name.indexOf(this.state.filter) > -1){
							return <EventItem item={item} onDeleteElement={this.onDeleteElement.bind(this)}/>
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
