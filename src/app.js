/**
 * Created by AshZhang on 2016-4-8.
 */


import './styles/app.scss';

require(`./ajax/fetchie-${process.env.NODE_ENV}`);

import React from 'react';
import ReactDOM from 'react-dom';
import hashHistory from 'react-router/lib/hashHistory';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import createStore from 'redux/lib/createStore';
import applyMiddleware from 'redux/lib/applyMiddleware';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import DemoContainer from './containers/DemoContainer';

import reducers from './reducers';


const store = applyMiddleware(thunkMiddleware)(createStore)(reducers);


ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={DemoContainer} />
		</Router>
	</Provider>
), document.getElementById('app'));
