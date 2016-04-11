/**
 * Created by AshZhang on 2016-4-11.
 */


import { demoAction } from '../demoAction';


describe('demoAction', () => {

	it('test demo', () => {
		expect(demoAction(1).type).toEqual('DEMO_ACTION');
		expect(demoAction(1).data).toEqual(1);
	});
});
