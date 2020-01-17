import React from 'react';
import { homepageData } from '../data';
import Item from '../components/Item';

//this is the homepage
class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<div className="section-name">Homepage</div>
				<ul className = "item-list">
					{homepageData.map(item => <Item key={item.id} details={homepageData[(item.id)-1]} />)}
				</ul>
			</div>
		)
	}
}

export default Dashboard;