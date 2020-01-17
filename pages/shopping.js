import React from 'react';
import { shoppingData } from '../data';
import Item from '../components/Item';

class Shopping extends React.Component {
	render() {
		return (
			<div>
				<div className="section-name">Shopping</div>
				<ul className = "item-list">
					{shoppingData.map(item => <Item key={item.id} details={shoppingData[(item.id)-1]} />)}
				</ul>
			</div>
		)
	}
}

export default Shopping;