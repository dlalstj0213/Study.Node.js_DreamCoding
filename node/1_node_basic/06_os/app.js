/**
 * 노드가 동작하고 있는 운영체제에 대한 정보 가져오기
 */

const os = require('os');

// 줄바꿈 라인
console.log(os.EOL === '\n'); //Mac
console.log(os.EOL === '\r\n'); //Window

// 그 외 정보
console.log(os.totalmem());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.uptime());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus());
console.log(os.type());
console.log(os.release());
console.log(os.networkInterfaces());
console.log(os.homedir());
console.log(os.userInfo());
console.log(os.userInfo());
