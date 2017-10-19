import React from 'react';

const EventFilter = (props) => {
	return(
		<form>
			<input type="text" placeholder="filter.." value={props.filter} onChange={props.onChange} ></input>
		</form>
	);
};

export default EventFilter;
