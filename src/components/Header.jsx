import React, {Component} from 'react';
import {Router, Link} from 'react-router';

export default class Header extends Component {
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
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						{this.setHeaderBrandName('Imgur Browser')}
						
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a>Link #1</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}