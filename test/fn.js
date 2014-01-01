var test = require('tape');
var sigsolve = require('../');

test('multiple elements in a type signature', function (t) {
    var pool = {
        f : [ [ 'a', 'b' ], 'c' ],
        g : [ 'c', 'z' ],
        h : [ 'a', 'd' ],
        i : [ 'd', 'b' ],
    };
    t.same(
        sigsolve([ 'a', 'z' ], pool),
        [ [ [ 'f', [ 'h', 'i' ] ], 'g' ] ]
    );
    
    t.end();
});
