/**
 * Created by AshZhang on 2016-4-11.
 */


const context = require.context('../src', true, /-test\.js$/);
context.keys().forEach(context);
