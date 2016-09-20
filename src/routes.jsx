import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/App';
import Topic from './components/Topic';

const ROUTES = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="topics/:id" component={Topic} />
		</Route>
	</Router>
);

export default ROUTES;