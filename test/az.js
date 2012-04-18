var test = require('tap').test;
var sigsolve = require('../');

test('a to z', function (t) {
    var pool = [
        [ 'a', 'b' ],
        [ 'b', 'x' ],
        [ 'x', 'z' ],
        [ 'c', 'z' ],
        [ 'c', 'd' ],
    ];
    t.same(
        sigsolve([ 'a', 'z' ], pool),
        [ [ [ 'a', 'b' ], [ 'b', 'x' ], [ 'x', 'z' ] ] ]
    );
    
    t.same(sigsolve([ 'a', 'd' ], pool), []);
    
    t.end();
});
