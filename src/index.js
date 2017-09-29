import React from 'react';
import ReactDOM from 'react-dom';
import events from './data/events.json';
import mapEvents from './Events';



ReactDOM.render(mapEvents(events), document.getElementById('root'));
