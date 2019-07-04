'use strict';

class Logger {
  constructor() {
    this.stream = null;
  }

  log(message) {
    if (this.stream) {
      this.stream.write(message + '\n');
    }
  }
}

// Usage

const logger = new Logger();
logger.stream = process.stdout;
logger.log('Here we are');
