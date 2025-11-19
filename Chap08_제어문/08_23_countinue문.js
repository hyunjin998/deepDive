// p.106

// 문자열에서 특정 문자의 개수 세기


var string = 'Hello World.';
var search = 'l';

const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length);  // 3