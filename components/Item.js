import React from "react";

class Item extends React.Component {
	render() {
		return (
			<li className="item-listing">
				<a href={this.props.details.url} target="blank"><img src={this.props.details.image} alt={this.props.details.name} />{this.props.details.name}</a>
			</li>
		);
	}
}
export default Item;