module.exports = function solve (signature, pool) {
    function exactMatches (sig) {
        if (Array.isArray(sig[0])) {
            return exactMatches([ sig[0][0], sig[1] ]);
        }
        else return signature[0] === sig[0] && signature[1] === sig[1];
    }
    
    function headMatches (sig) {
        if (Array.isArray(sig[0])) {
            return headMatches([ sig[0][0], sig[1] ]);
        }
        else return signature[0] === sig[0];
    }
    
    var pre = Object.keys(pool).filter(function (name) {
        var sig = pool[name];
        return headMatches(sig[0]);
    });
    if (pre.length === 0) return [];
    
    var exact = Object.keys(pool)
        .filter(function (name) {
            var sig = pool[name];
            return exactMatches(sig);
        })
    ;
    
    return pre.reduce(function (acc, name) {
        var sig = pool[name];
        var res = solve([ sig[1], signature[1] ], pool)
            .map(function (r) { return [name].concat(r) })
        ;
        return acc.concat(res);
    }, exact);
};
