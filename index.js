var isArray = require('isarray');
var objectKeys = require('object-keys');

module.exports = function (sig, pool) {
    var keys = objectKeys(pool);
    return solve(sig[0], sig[1], pool, keys);
};

function solve (src, dst, pool, keys) {
    var matches = [];
    
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var x = pool[key];
        if (x[0] === src && x[1] === dst) {
            matches.push([ key ]);
        }
        else if (x[0] === src) {
            var xs = solve(x[1], dst, pool, keys);
            for (var j = 0; j < xs.length; j++) {
                matches.push([ key ].concat(xs[j]));
            }
        }
        else if (isArray(x[0]) && x[0][0] === src) {
            var a = solve(x[1], dst, pool, keys);
            if (!a.length) continue;
            var b = solve(x[0][0], x[0][1], pool, keys);
            if (!b.length) continue;
            for (var j = 0; j < a.length; j++) {
                for (var k = 0; k < b.length; k++) {
                    matches.push([ [ key, b[k] ] ].concat(a[j]));
                }
            }
        }
    }
    
    return matches;
};
