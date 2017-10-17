import React from 'react';

const AddEvent = (props) => {
	return(
		<form onSubmit={props.onFormSubmit}>
			<input type="text" placeholder="name" value={props.name} onChange={props.onFieldChange.bind(this, 'newName')}></input>
			<input type="text" placeholder="place" value={props.place} onChange={props.onFieldChange.bind(this, 'newPlace')}></input>
			<input type="date" placeholder="date" value={props.date} onChange={props.onFieldChange.bind(this, 'newDate')}></input>
			<input type="number" placeholder="time" value={props.time} onChange={props.onFieldChange.bind(this, 'newTime')}></input>
			<button type="submit">Dodaj</button>
		</form>
	);
};

export default AddEvent;
