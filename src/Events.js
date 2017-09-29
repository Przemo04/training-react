import React from 'react';
import ReactDOM from 'react-dom';


const getEvents = (events) => {
return(	<ul>
		{events.map(item =>{

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

export default getEvents;
