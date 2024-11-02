'use strict';

const { EventEmitter } = require('node:events');

class Channel extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
    this.history = [];
  }

  send(from, message) {
    this.history.push({ from, message });
    this.emit('message', from, message);
  }
}

class Application extends EventEmitter {
  constructor() {
    super();
    this.channels = {};
  }

  createChannel(name) {
    const channel = new Channel(name);
    this.channels[name] = channel;
    this.emit('channel', name);
    return channel;
  }
}

// Usage

const chat = new Application('Chat');

chat.on('channel', (name) => {
  console.log(`Channel ${name} created`);
});

const channel = chat.createChannel('HowProgrammingWorks');

channel.on('message', (from, message) => {
  console.log(`${from}> ${message}`);
});

channel.send('Marcus', 'Hello there');
channel.send('Mao', 'Node.js macht frei!');
channel.send('Marcus', 'Fine');
