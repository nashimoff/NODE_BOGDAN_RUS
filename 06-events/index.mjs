import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('timeout', () => {
    console.log('Timeout event!')
})

myEmitter.emit('timeout')