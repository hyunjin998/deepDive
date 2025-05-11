// p.65

// 템플릿 리터럴 내에서는 표현식 삽입(expression interpolation)을 통해 문자열을 간단히 삽입할 수 있음
var first = 'Ung-mo';
var last = 'Lee';

// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`);
console.log(`1 + 2 = ${1 + 2}`);
console.log('1 + 2 = ${1 + 2}');