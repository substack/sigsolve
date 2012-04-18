sigsolve
========

type signature satisfiability solver under function composition

example
=======

methods
=======

var sigsolve = require('sigsolve')

sigsolve(target, pool)
----------------------

Given a type signature `target` and an array of type signatures `pool`,

return an array of type signature arrays that when composed have the same
type signature as the `target`.

license
=======

MIT/X11
