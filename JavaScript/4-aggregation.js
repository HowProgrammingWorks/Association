'use strict';

// Aggregation with closure

const createLogger = (stream) => ({
  log(message) {
    stream.write(message + '\n');
  },
});

// Usage

const stream = process.stdout;
const logger = createLogger(stream);
logger.log('Here we are');
