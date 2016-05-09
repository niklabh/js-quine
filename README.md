# js-quine
Quine implementation in node.js a program which prints itself

#Usage
$ ./quine.js

\#!/usr/bin/env node

require('fs').createReadStream(process.argv[1]).on('data', (data) => console.log(data.toString()));
