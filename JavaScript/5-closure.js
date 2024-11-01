'use strict';

const fs = require('node:fs');

// Composition closure

const createLogger = (name) => {
  const stream = fs.createWriteStream(name);

  return {
    log(message) {
      stream.write(message + '\n');
    },
  };
};

// Usage

const logger = createLogger('file.log');
logger.log('Here we are');
