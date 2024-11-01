'use strict';

{
  // Aggregation with closure
  const createLogger = (stream) => (message) => stream.write(message + '\n');
  const log = createLogger(process.stdout);
  log('Here we are');
}

{
  // Function compose
  const compose = (f, g) => (x) => f(g(x));
  const write = (stream) => (line) => stream.write(line);
  const format = (message) => message + '\n';
  const log = compose(write(process.stdout), format);
  log('Here we are');
}
