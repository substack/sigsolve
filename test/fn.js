var test = require('tape');
var sigsolve = require('../');

test('higher-order', function (t) {
    var pool = {
        f : [ [ 'a', 'b' ], 'c' ],
        g : [ 'c', 'z' ],
        h : [ 'a', 'd' ],
        i : [ 'd', 'b' ],
    };
    t.deepEqual(
        sigsolve([ 'a', 'z' ], pool),
        [ [ [ 'f', [ 'h', 'i' ] ], 'g' ] ]
    );
    
    t.end();
});

test('higher-order multiple tails', function (t) {
    var pool = {
        f : [ [ 'a', 'b' ], 'c' ],
        g : [ 'c', 'z' ],
        h : [ 'a', 'd' ],
        i : [ 'd', 'b' ],
        j : [ 'c', 'e' ],
        k : [ 'e', 'z' ]
    };
    t.deepEqual(
        sigsolve([ 'a', 'z' ], pool),
        [
            [ [ 'f', [ 'h', 'i' ] ], 'g' ],
            [ [ 'f', [ 'h', 'i' ] ], 'j', 'k' ]
        ]
    );
    t.end();
});
