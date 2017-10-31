import React from 'react';
import events from '../data/events.json';

class Details extends React.Component {
	constructor(props){
		super(props);
		this.state = {event: {}};
	}

	componentDidMount() {
		const id = this.props.match.params.eventId;
		const event = events.find(item => item.id === parseInt(id, 10));

		this.setState({
			event
		});
	}

	render(){
		const { name, place, date } = this.state.event;

		return(
			<div>
				Nazwa: {name} <br />
				Miejsce: {place} <br />
				Data: {date} <br />
			</div>
		);
	}
}


export default Details;
