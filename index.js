module.exports = function solve (signature, pool) {
    var pre = pool.filter(function (sig) {
        return signature[0] === sig[0];
    });
    if (pre.length === 0) return [];
    
    var exact = pool
        .filter(function (sig) {
            return signature[0] === sig[0] && signature[1] === sig[1];
        })
        .map(function (sig) {
            return [ sig ]
        })
    ;
    
    return pre.reduce(function (acc, sig) {
        var res = solve([ sig[1], signature[1] ], pool)
            .map(function (r) { return [sig].concat(r) })
        ;
        return acc.concat(res);
    }, exact);
};
