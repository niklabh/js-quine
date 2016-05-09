#!/usr/bin/env node
require('fs').createReadStream(process.argv[1]).on('data', (data) => console.log(data.toString()));