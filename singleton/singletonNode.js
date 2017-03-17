/**
 * Created by shenyin.sy on 17/3/16.
 */


/*
 * app.js
 */
var singleton = require('./a-singleton');
console.log(singleton.x); // undefined (x is private)
console.log(singleton.sum(1,2)); // undefined (sum is private)
console.log(singleton.someProperty); // 'I am public'
console.log(singleton.toggleZ()); // false
