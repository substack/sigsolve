sigsolve
========

type signature satisfiability solver under function composition

[![build status](https://secure.travis-ci.org/substack/sigsolve.png)](http://travis-ci.org/substack/sigsolve)

example
=======

``` js
var test = require('tap').test;
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

methods
=======

var sigsolve = require('sigsolve')

sigsolve(target, pool)
----------------------

Given a type signature `target` and an object `pool` mapping function names to
type signatures,

return an array of function chain arrays that when composed have the same type
signature as the `target`.

license
=======

MIT/X11
