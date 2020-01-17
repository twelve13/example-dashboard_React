import React from 'react';
import { workoutData } from '../data';
import Item from '../components/Item';

class Workout extends React.Component {
	render() {
		return (
			<div>
				<div className="section-name">
					<div>Workout</div>
				</div>
				<ul className = "item-list">
					{workoutData.map(item => <Item key={item.id} details={workoutData[(item.id)-1]} />)}
				</ul>
			</div>
		)
	}
}

export default Workout;