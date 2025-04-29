// p.88

/*
typeof 연산자로 null 값을 연산해 보면 "null"이 아닌 "object"를 반환
따라서 값이 null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용
*/


var foo = null;

console.log(typeof foo === null);
console.log(foo === null);