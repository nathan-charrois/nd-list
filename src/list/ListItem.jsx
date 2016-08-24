import React, { Component } from 'react';

import './ListItem.scss';

import Item from '../item/Item.jsx';

class ListItem extends Component {
	render() {
		return (
			<li className="List__item">
				<Item wine={this.props.wine} />
			</li>
		)
	}
}

export default ListItem;