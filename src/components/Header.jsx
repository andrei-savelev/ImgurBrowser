import React, {Component} from 'react';
import {Router, Link} from 'react-router';
import TopicStore from '../stores/topic-store';
import Actions from '../actions';
import Dropdown from './Dropdown';

export default class Header extends Component {
	constructor(props) {
		super(props);
        this.state = {
        	topics: []
        };
    }

	componentWillMount() {
		Actions.getTopics();
	}

	componentDidMount() {
		this.unsubscribe = TopicStore.listen(this.onChange.bind(this));
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onChange(topics) {
		this.setState({
			topics: topics
		});
	}

	setHeaderBrandName(sBrandName) {
		var result = "";

		if (location.pathname.replace(/^\/([^\/]*).*$/, '$1').length) {
			result = <Link className="navbar-brand" to="/">{sBrandName}</Link>
		} else {
			result = <Link className="navbar-brand">{sBrandName}</Link>
		}

		return result;
	}

	render() {
		return (
			<header className="header">
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						{this.setHeaderBrandName('Imgur Browser')}

						<ul className="nav navbar-nav navbar-right">
					        <li className="dropdown">
					          <Dropdown items={this.state.items} title="Topics"/>
					        </li>
					    </ul>
					</div>
				</nav>
			</header>
		);
	}
}