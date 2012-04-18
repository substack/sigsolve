module.exports = function solve (signature, pool) {
    var pre = Object.keys(pool).filter(function (name) {
        return signature[0] === pool[name][0];
    });
    if (pre.length === 0) return [];
    
    var exact = Object.keys(pool)
        .filter(function (name) {
            var sig = pool[name];
            return signature[0] === sig[0] && signature[1] === sig[1];
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
