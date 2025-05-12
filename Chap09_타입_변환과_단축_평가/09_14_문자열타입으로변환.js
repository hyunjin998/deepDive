// p.115

/*
문자열 타입으로 변환하는 방법
1. String 생성자 함수를 new 연산자 없이 호출
2. Object.prototype.toString 메서드 사용
3. 문자열 연결 연산자 이용
*/

// 1. String 생성자 함수를 new 연산자 없이 호출
// 숫자
console.log('1: ' + String(1));
console.log('2: ' + String(NaN));
console.log('3: ' + String(Infinity));

// 불리언
console.log('4: ' + true);
console.log('5: ' + false);


// 2. Object.prototype.toString 메서드 사용
// 숫자
console.log('6: ' + (1).toString());
console.log('7: ' + (NaN).toString());
console.log('8: ' + (Infinity).toString());

// 불리언
console.log('9: ' + (true).toString());
console.log('10: ' + (false).toString());


// 3. 문자열 연결 연산자를 이용
// 숫자
console.log('11: ' + (1 + ''));
console.log('12: ' + (NaN + ''));
console.log('13: ' + (Infinity + ''));

// 불리언
console.log('14: ' + (true + ''));
console.log('15: ' + (false + ''));
