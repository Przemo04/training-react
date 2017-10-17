import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';

import EventItem from './EventItem';
import EventsFilter from './EventsFilter';
import AddEvent from './AddEvent';

class Events extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			events: [],
			filter: '',
			newName: '',
			newDate: '',
			newTime: '',
			newPlace: ''
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

onEventAdd(event) {
	event.preventDefault();
	const {
		events,
		newName,
		newPlace,
		newDate,
		newTime
	} = this.state;

	const maxId = Math.max(...events.map(item => item.id));

	events.push({
		id: maxId + 1,
		name: newName,
		place: newPlace,
		date: newDate,
		time: newTime,
	});

	this.setState({
		events
	});
}

onFieldChange(field, event) {
	const value = event.currentTarget.value;

	this.setState({
		[field]: value
	});
}

	// onSubmit(event){
	// 	const place = event.currentTarget.place;
	// 	const date = event.currentTarget.date;
	// 	const time = event.currentTarget.time;
	// 	const name = event.currentTarget.name;
	//
	// 	this.setState({
	// 		newPlace,
	// 		newDate,
	// 		newTime,
	// 		newName
	// 	});
	// }
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
					<AddEvent name={this.state.name}
						place={this.state.newPlace}
						date={this.state.newDate}
						time={this.state.newTime}
						onFieldChange={this.onFieldChange.bind(this)}
						onFormSubmit={this.onEventAdd.bind(this)}>
					</AddEvent>
				</ul>

		);
	}
};


export default Events;
