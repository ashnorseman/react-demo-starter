/**
 * Created by AshZhang on 2016-4-11.
 */


import fetchie from 'fetchie';


fetchie
	.use(function () {
		this.timeout(20000);
	})
	.error(error => {
		console.log(error);
	});
