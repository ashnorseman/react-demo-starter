/**
 * Created by AshZhang on 2016-4-11.
 */


import fetchie from 'fetchie';


export function demoAction(actionData) {
	return {
		type: 'DEMO_ACTION',
		data: actionData
	};
}


export function demoAjaxAction() {
	return dispatch => fetchie
		.get('demo/')
		.then(res => {
			dispatch(demoAjaxSuccessAction(res.demoData));
		});
}


function demoAjaxSuccessAction(demoData) {
	return {
		type: 'DEMO_AJAX_ACTION',
		data: demoData
	};
}
