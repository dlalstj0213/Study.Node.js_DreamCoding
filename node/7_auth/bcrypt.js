const bcrypt = require('bcrypt');

const pw = 'abcd1234';
// hash, hashSync(암호화할 타겟, Salt길이)
const hashed = bcrypt.hashSync(pw, 10); // 동기
console.log(`password: ${pw} | hashed password: ${hashed}`);
// password: abcd1234 | hashed password: $2b$10$p0QGo0SCPf04HkP17OxA.OsQH1COyfnhICqzqLTrcWJA1zwyDRhNG

// 암호화된 정보와 실제 값을 비교
// ex) 사용자가 패스워드를 입력시 비교하는 구문
// compare, compareSync(클라이언트가 입력한 값, 암호화된 값)
let result = bcrypt.compareSync('abcd1234', hashed);
console.log(result && '패스워드 일치!');

result = bcrypt.compareSync('abcd1255', hashed);
console.log(!result && '패스워드 불일치!');
