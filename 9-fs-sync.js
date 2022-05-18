const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/subFolder/test.txt', 'utf8');
const second = readFileSync('./content/abc.txt', 'utf8');
// console.log(first);
// console.log(second);
writeFileSync('./content/abcd.txt', `here is the messege :${first} , ${second} `, { flag: 'a' });
