// p.112

/*
산술 연산자의 역할은 숫자 값을 만드는 것이므로, 산술 연산자의 모든 피연산자는 코드 문맥상 모두 숫자 타입이어야 함
이때 피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 표현식의 평가 결과는 NaN이 됨
*/


console.log(1 - '1');  // 0
console.log(1 * '10');  // 10
console.log(1 / 'one');  // NaN

console.log('1' > 0);  // true


// 문자열 타입
console.log(+'');  // 0
console.log(+'0');  // 0
console.log(+'1');  // 1
console.log(+'string');  // NaN


// 불리언 타입
console.log(+true);  // 1
console.log(+false);  // 0


// null 타입
console.log(+null);  // 0


// undefined 타입
console.log(+undefined);  // NaN


// 심벌 타입
// TypeError: Cannot convert a Symbol value to a number
// console.log('13: ' + (+Symbol()));


// 객체 타입
console.log(+{});  // NaN
console.log(+[]);  // 0
console.log(+[10, 20]);  // NaN
console.log(+(function(){}));  // NaN