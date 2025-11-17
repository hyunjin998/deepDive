// p.78

// 문자열 연결 연산자
console.log('1' + 2);  // 12
console.log(1 + '2');  // 12

// 산술 연산자
console.log(1 + 2);  // 3


/*
암묵적 타입 변환 (implicit coercion) 또는 타입 강제 변환 (type coercion)
1 + true를 연산하면 자바스크립트 엔진은 암묵적으로 불리언 타입의 값인 true를 숫자 타입인 1로 타입을 강제 변환한 후 연산을 수행함
*/

console.log(1 + true);  // 2
console.log(1 + false);  // 1
console.log(1 + null);  // 1 (null은 0으로 타입 변환됨)

console.log(+undefined);   // NaN
console.log(1 + undefined);  // NaN