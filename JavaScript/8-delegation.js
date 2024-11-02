'use strict';

const { EventEmitter } = require('node:events');

class Channel {
  constructor(application, name) {
    this.application = application;
    this.name = name;
    this.history = [];
  }

  send(from, message) {
    this.history.push({ from, message });
    this.application.send(this.name, from, message);
  }
}

class Application {
  constructor() {
    this.events = new EventEmitter();
    this.channels = {};
  }

  send(channelName, from, message) {
    this.events.emit('message', channelName, from, message);
  }

  createChannel(name) {
    const channel = new Channel(this, name);
    this.channels[name] = channel;
    this.events.emit('channel', name);
    return channel;
  }
}

// Usage

const chat = new Application('Chat');

chat.events.on('channel', (name) => {
  console.log(`Channel ${name} created`);
});

chat.events.on('message', (channelName, from, message) => {
  console.log(`${from}@${channelName}> ${message}`);
});

const channel = chat.createChannel('HowProgrammingWorks');

channel.send('Marcus', 'Hello there');
channel.send('Mao', 'Node.js macht frei!');
channel.send('Marcus', 'Fine');
