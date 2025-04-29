// p.88

/*
typeof : "string", "number", "boolean", "undefined", "symbol", "object", "function"
"null"을 반환하는 경우는 없음
*/


console.log('1: ' + (typeof ''));
console.log('2: ' + typeof 1);
console.log('3: ' + typeof NaN);
console.log('4: ' + typeof true);
console.log('5: ' + typeof undefined);
console.log('6: ' + typeof Symbol());
console.log('7: ' + typeof null);
console.log('8: ' + typeof []);
console.log('9: ' + typeof {});
console.log('10: ' + typeof new Date());
console.log('11: ' + typeof /test/gi);
console.log('12: ' + typeof function() {});