/**
 * Created by AshZhang on 2016-4-11.
 */


const context = require.context('./data', true, /\.js$/),
	result = {};

context.keys().forEach(data => {
	Object.assign(result, context(data).default);
});

export default result;
