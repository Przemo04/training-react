import React from 'react';
import ReactDOM from 'react-dom';


const Events = (props) => {
return(	<ul>
		{props.dane.map(item =>{

			const date = new Date(item.date);

			if (date <= Date.now()){
				return (
					<li key={item.id}>{item.name}Price:{item.id}</li>
				);
			}
		})}
	</ul>
	);
};

export default Events;
