import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';


ReactDOM.render(<ul>
	{events.map(item =>{
		return (
			<li key={item.id}>{item.name}{item.id}</li>
		);
	})}
</ul>, document.getElementById('root'));
