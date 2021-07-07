/**
 * Event Class 정의하기
 */

const EventEmitter = require('events');

// Eventemitter 상속받기
class Logger extends EventEmitter {
	log(callback) {
		this.emit('log', 'started...');
		callback();
		this.emit('log', 'ended!');
	}
}

module.exports.Logger = Logger;
