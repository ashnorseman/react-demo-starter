/**
 * Created by AshZhang on 2016-4-11.
 */


import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import DemoComponent from '../../components/DemoComponent';

import { demoAction, demoAjaxAction } from '../../actions/demoAction';


@connect(state => ({
	demo: state.demo
}))
export default class DemoContainer extends Component {

	static propTypes = {
		dispatch: PropTypes.func,
		demo: PropTypes.object
	};

	componentDidMount() {
		this.props.dispatch(demoAjaxAction());
	}

	addData() {
		this.props.dispatch(demoAction(this.props.demo.demoData + 1));
	}

	render() {
		const {
			demo
		} = this.props;

		return (
			<DemoComponent {...demo} onClick={::this.addData} />
		);
	}
}
