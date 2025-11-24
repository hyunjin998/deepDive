// p.115

/*
문자열 타입으로 변환하는 방법
1. String 생성자 함수를 new 연산자 없이 호출
2. Object.prototype.toString 메서드 사용
3. 문자열 연결 연산자 이용
*/

// 1. String 생성자 함수를 new 연산자 없이 호출
// 숫자
console.log(String(1));  // 1
console.log(String(NaN));  // NaN
console.log(String(Infinity));  // Infinity

// 불리언
console.log(true);  // true
console.log(false);  // false


// 2. Object.prototype.toString 메서드 사용
// 숫자
console.log((1).toString());  // 1
console.log((NaN).toString());  // NaN
console.log((Infinity).toString());  // Infinity

// 불리언
console.log((true).toString());  // true
console.log((false).toString());  // false


// 3. 문자열 연결 연산자를 이용
// 숫자
console.log(1 + '');  // 1
console.log(NaN + '');  // NaN
console.log(Infinity + '');  // Infinity

// 불리언
console.log(true + '');  // true
console.log(false + '');  // false
