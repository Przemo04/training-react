import React from 'react';

import {
	BrowserRouter as Router, Route
} from 'react-router-dom';

import Events from './events/Events';

const App = () => {
	return(
		<Router>
			<div>
				<Route path="/" component={Events} />
			</div>
		</Router>
	);
};

export default App;
