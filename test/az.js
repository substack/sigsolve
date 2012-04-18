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
    var solve = sigsolve(pool);
    
    t.same(
        solve([ 'a', 'z' ]),
        [ [ 'a', 'b' ], [ 'b', 'x' ], [ 'x', 'z' ] ]
    );
    
    t.same(solve([ 'a', 'd' ]), []);
    
    t.end();
});
