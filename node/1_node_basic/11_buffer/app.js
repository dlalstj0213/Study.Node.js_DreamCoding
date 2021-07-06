/**
 * What is Buffer?
 * Buffer is a
 * Fixed-size chunk of memory
 * array of integers, byte of data
 */

const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString()); // default encodingType = utf-8

// create
const buf2 = Buffer.alloc(2); // 사이즈가 2인 버퍼 만들기, 초기화
const buf3 = Buffer.allocUnsafe(2); // 초기화X
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());
buf2.copy(buf3);
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
