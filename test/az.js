var test = require('tape');
var sigsolve = require('../');

test('a to z', function (t) {
    var pool = {
        f : [ 'a', 'b' ],
        g : [ 'b', 'x' ],
        h : [ 'x', 'z' ],
        i : [ 'c', 'z' ],
        j : [ 'c', 'd' ],
    };
    t.same(
        sigsolve([ 'a', 'z' ], pool),
        [ [ 'f', 'g', 'h' ] ]
    );
    
    t.same(sigsolve([ 'a', 'd' ], pool), []);
    
    t.end();
});
