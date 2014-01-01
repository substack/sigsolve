module.exports = function solve (src, dst, pool) {
    var keys = Object.keys(pool);
    var matches = [];
    
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var x = pool[key];
        if (x[0] === src && x[1] === dst) {
            matches.push([ key ]);
        }
        else if (x[0] === src) {
            var xs = solve(x[1], dst, pool);
            for (var j = 0; j < xs.length; j++) {
                matches.push([ key ].concat(xs[j]));
            }
        }
    }
    
    return matches;
};
