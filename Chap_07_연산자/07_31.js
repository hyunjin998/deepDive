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


/*
typeof 연산자로 null 값을 연산해 보면 "null"이 아닌 "object"를 반환
따라서 값이 null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용
*/


var foo = null;

console.log(typeof foo === null);
console.log(foo === null);