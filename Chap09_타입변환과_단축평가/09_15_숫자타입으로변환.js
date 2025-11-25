// p.116

/*
숫자 타입으로 변환하는 방법
1. Number 생성자 함수를 new 연산자 없이 호출
2. parseInt, parseFloat 함수를 사용하는 방법 (문자열만 숫자 타입으로 변환 가능)
3. + 단항 산술 연산자를 이용
4. * 산술 연산자를 이용
*/


// 1. Number 생성자 함수를 new 연산자 없이 호출
// 문자열
console.log(Number('0'));  // 0
console.log(Number('-1'));  // -1
console.log(Number('10.53'));  // 10.53

// 불리언
console.log(Number(true));  // 1
console.log(Number(false));  // 0


// 2. parseInt, parseFloat 함수를 사용하는 방법 (문자열만 숫자 타입으로 변환 가능)
// 문자열
console.log(parseInt('0'));  // 0
console.log(parseInt('-1'));  // -1
console.log(parseInt('10.53'));  // 10


// 3. + 단항 산술 연산자를 이용
// 문자열
console.log(+'0');  // 0
console.log(+'-1');  // -1
console.log(+'10.53');  // 10.53

// 불리언
console.log(+true);  // 1
console.log(+false);  // 0


// 4. * 산술 연산자를 이용
// 문자열
console.log('0' * 1);  // 0
console.log('-1' * 1);  // -1
console.log('10.53' * 1);  // 10.53

// 불리언
console.log(true * 1);  // 1
console.log(false * 1);  // 0