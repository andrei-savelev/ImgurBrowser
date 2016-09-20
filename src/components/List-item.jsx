import React, {Component} from 'react';
import {Link} from 'react-router';

export default class ListItem extends Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		this.props.whenItemClicked(this.props.item.name);
	}

	render() {
	    return <li className={this.props.className}>
	      <Link to={this.props.path}>{this.props.item.name}</Link>
	    </li>
	}
}