var test = require('tap').test;
var sigsolve = require('../');

var pool = [
    [ 'a', 'b' ],
    [ 'b', 'x' ],
    [ 'x', 'z' ],
    [ 'c', 'z' ],
    [ 'c', 'd' ],
];

var solutions = sigsolve([ 'a', 'z' ], pool);
console.dir(solutions);
