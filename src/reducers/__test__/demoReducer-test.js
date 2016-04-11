/**
 * Created by AshZhang on 2016-4-11.
 */


import demoReducer from '../demoReducer';


describe('demoReducer', () => {
	let state;

	beforeEach(() => {
		state = {};
	});

	it('action DEMO_ACTION', () => {
		expect(demoReducer(state, {
			type: 'DEMO_ACTION',
			data: 1
		}).demoData).toEqual(1);
	});

	it('action DEMO_AJAX_ACTION', () => {
		expect(demoReducer(state, {
			type: 'DEMO_AJAX_ACTION',
			data: 100
		}).demoData).toEqual(100);
	});

	it('other actions', () => {
		expect(demoReducer(state, {
			type: 'XXX',
			data: 1
		}).demoData).toBeUndefined();
	});
});
