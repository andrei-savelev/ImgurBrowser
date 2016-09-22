import React, {Component} from 'react';
import {Link} from 'react-router';

export default class ListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	    return <li className={this.props.className} onClick={this.props.whenItemClicked}>
	      <Link activeClassName="active" to={this.props.path}>{this.props.item.name}</Link>
	    </li>
	}
}