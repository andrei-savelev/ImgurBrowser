import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/App';

const ROUTES = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>
);

export default ROUTES;