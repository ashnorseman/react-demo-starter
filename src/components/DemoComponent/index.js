/**
 * Created by AshZhang on 2016-4-11.
 */


import './DemoComponent.scss';

import React, { Component, PropTypes } from 'react';


export default class DemoComponent extends Component {

	static propTypes = {
		demoData: PropTypes.number.isRequired,
		onClick: PropTypes.func
	};

	static defaultProps = {
		demoData: 0
	};

	render() {
		const {
			demoData,
			...props
		} = this.props;

		return <div className="demo" {...props}>DemoData: {demoData}</div>;
	}
}
