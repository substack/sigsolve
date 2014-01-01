# sigsolve

find a path through a type signature pool

[![testling badge](https://ci.testling.com/substack/sigsolve.png)](https://ci.testling.com/substack/sigsolve)

[![build status](https://secure.travis-ci.org/substack/sigsolve.png)](http://travis-ci.org/substack/sigsolve)

# example

``` js
var sigsolve = require('sigsolve');
var pool = {
    f : [ 'a', 'b' ],
    g : [ 'b', 'x' ],
    h : [ 'x', 'z' ],
    i : [ 'c', 'z' ],
    j : [ 'c', 'd' ],
};

var solutions = sigsolve([ 'a', 'z' ], pool);
console.dir(solutions);
```

output:

```
[ [ 'f', 'g', 'h' ] ]
```

or higher-order signatures work too:

``` js
var sigsolve = require('sigsolve');
var pool = {
    f : [ [ 'a', 'b' ], 'c' ],
    g : [ 'c', 'z' ],
    h : [ 'a', 'd' ],
    i : [ 'd', 'b' ],
};
var solutions = sigsolve([ 'a', 'z' ], pool);
console.log(JSON.stringify(solutions));
```

output:

```
[[["f",["h","i"]],"g"]]
```

# methods

var sigsolve = require('sigsolve')

## var solutions = sigsolve(target, pool)

Given a type signature `target` and an object `pool` mapping function names to
type signatures,

return an array of function chain arrays that when composed have the same type
signature as the `target`.

# license

MIT
