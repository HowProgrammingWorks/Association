'use strict';

const fs = require('fs');

class Logger {
  constructor() {
    this.stream = fs.createWriteStream('file.log');
  }

  log(message) {
    this.stream.write(message + '\n');
  }
}

// Usage

const logger = new Logger();
logger.log('Here we are');
