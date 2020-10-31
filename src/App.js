import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import ROUTERS from './routers';

function App() {
	return (
		<Router>
			<Switch>
				{ROUTERS.map(route => (
					<Route
						exact
						path={route.path}
						component={route.component}
					/>
				))}
			</Switch>
		</Router>
	);
}

export default App;