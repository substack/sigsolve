var test = require('tap').test;
var sigsolve = require('../');

var pool = {
    f : [ 'a', 'b' ],
    g : [ 'b', 'x' ],
    h : [ 'x', 'z' ],
    i : [ 'c', 'z' ],
    j : [ 'c', 'd' ],
};

var solutions = sigsolve([ 'a', 'z' ], pool);
console.dir(solutions);
