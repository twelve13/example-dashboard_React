import React from 'react';
import { artData } from '../data';
import Item from '../components/Item';

class Art extends React.Component {
	render() {
		return (
			<div>
				<div className="section-name">Art Inspiration</div>
				<ul className = "item-list">
					{artData.map(item => <Item key={item.id} details={artData[(item.id)-1]} />)}
				</ul>
			</div>
		)
	}
}

export default Art;