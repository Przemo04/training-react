import React from 'react';
import { Link } from 'react-router-dom';

const EventItem = (props) => {
		return(
			<li key={props.item.id}>{props.item.name}Price:{props.item.id}
				<button onClick={props.onDeleteElement.bind(this, props.item.id)}>
					usuń
				</button>
				<Link to={'/details/' + props.item.id}>Szczegoly</Link>
			</li>
		);
};

export default EventItem;
