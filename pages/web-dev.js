import React from 'react';
import { webdevData } from '../data';
import Item from '../components/Item';

class WebDev extends React.Component {
	render() {
		return (
			<div>
				<div className="section-name">Web Development Tools</div>
				<ul className = "item-list">
					{webdevData.map(item => <Item key={item.id} details={webdevData[(item.id)-1]} />)}
				</ul>
			</div>
		)
	}
}

export default WebDev;