module.exports = function solve (sig, pool) {
    var src = sig[0], dst = sig[1];
    var keys = Object.keys(pool);
    var matches = [];
    
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var x = pool[key];
        if (x[0] === src && x[1] === dst) {
            matches.push([ key ]);
        }
        else if (x[0] === src) {
            var xs = solve([ x[1], dst ], pool);
            for (var j = 0; j < xs.length; j++) {
                matches.push([ key ].concat(xs[j]));
            }
        }
        else if (Array.isArray(x[0]) && x[0][0] === src) {
            var a = solve([ x[1], dst ], pool);
            if (!a.length) continue;
            var b = solve(x[0], pool);
            if (!b.length) continue;
            matches.push([ [ key, b ] ].concat(a));
        }
    }
    
    return matches;
};
