/**
 * Created by AshZhang on 2016-4-11.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import DemoComponent from '../index';


describe('DemoComponent', () => {

	it('render: default', () => {
		const instance = TestUtils.renderIntoDocument(<DemoComponent />),
			node = ReactDOM.findDOMNode(instance);

		expect(node.textContent).toEqual('DemoData: 0');
	});

	it('render: given props', () => {
		const instance = TestUtils.renderIntoDocument(<DemoComponent demoData={1} />),
			node = ReactDOM.findDOMNode(instance);

		expect(node.textContent).toEqual('DemoData: 1');
	});
});
