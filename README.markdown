sigsolve
========

type signature satisfiability solver under function composition

example
=======

methods
=======

var sigsolve = require('sigsolve')

var solve = sigsolve(pool)
--------------------------

Return a solver function for `pool`, an array of type signatures.

solve(signature)
----------------

Return an array of arrays of the type signatures that when composed have the
same signature as `signature`.

license
=======

MIT/X11
