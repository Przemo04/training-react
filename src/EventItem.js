import React from 'react';

const EventItem = (props) => {
		return(
			<li key={props.item.id}>{props.item.name}Price:{props.item.id}
				<button onClick={props.onDeleteElement.bind(this, props.item.id)}>
					usuń
				</button>
			</li>
		);
};

export default EventItem;
