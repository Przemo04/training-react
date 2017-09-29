import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';

const mapEvents = () => {
return(	<ul>
		{events.map(item =>{

			const date = new Date(item.date);

			if (date <= Date.now()){
				return (
					<li key={item.id}>{item.name}{item.id}</li>

				);
			}
		})}
	</ul>
);
}

ReactDOM.render(mapEvents(), document.getElementById('root'));
