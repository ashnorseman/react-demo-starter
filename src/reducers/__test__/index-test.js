/**
 * Created by AshZhang on 2016-4-11.
 */


import indexReducer from '../index';


describe('indexReducer', () => {

	it('combines reducers', () => {
		expect(indexReducer().demo).toBeTruthy();
	});
});
