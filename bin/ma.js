#!/usr/bin/env node

'use strict';

const InitCommand = require('../lib/cmd/init');

const init = new InitCommand();
init.start();
