/**
 * Created by shenyin.sy on 17/3/16.
 */

/*
 * a-singleton.js
 */

// Private
var x = 1;
var y = 'I am private';
var z = true;

function sum(num1, num2) {
    return num1 + num2;
}


// Public
var self = module.exports = {

    someProperty: 'I am public',

    addFive: function addFive(num) {
        return sum(num, 5);
    },

    toggleZ: function toggleZ() {
        return z = !z;
    }

};

