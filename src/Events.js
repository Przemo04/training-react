import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Events extends React.Component{


	render(){

		return(
			<ul>
					{this.props.dane.map(item =>{

						const date = new Date(item.date);

						if (date <= Date.now()){
							return (
								<li key={item.id}>{item.name}Price:{item.id}</li>
							);
						}
					})}
				</ul>
		);
	}
};

Events.PropTypes = {
	dane: PropTypes.array.isRequired
};


export default Events;
