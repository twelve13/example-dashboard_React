import React from 'react';
import { recipeData } from '../data';
import Item from '../components/Item';

class Recipes extends React.Component {
	render() {
		return (
			<div>
				<div className="section-name">Recipes</div>
				<ul className = "item-list">
					{recipeData.map(item => <Item key={item.id} details={recipeData[(item.id)-1]} />)}
				</ul>
			</div>
		)
	}
}

export default Recipes;