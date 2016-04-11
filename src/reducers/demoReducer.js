/**
 * Created by AshZhang on 2016-4-11.
 */


const initialState = {
	demoData: 0
};

export default function demoReducer(state = initialState, action = {}) {
	let data = action.data;

	switch (action.type) {
	case 'DEMO_ACTION':
	case 'DEMO_AJAX_ACTION':
		return {
			...state,
			demoData: data
		};
	default:
		return state;
	}
}
