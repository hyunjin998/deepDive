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
console.log('1: ' + (Number('0')));
console.log('2: ' + (Number('-1')));
console.log('3: ' + (Number('10.53')));

// 불리언
console.log('4: ' + (Number(true)));
console.log('5: ' + (Number(false)));


// 2. parseInt, parseFloat 함수를 사용하는 방법 (문자열만 숫자 타입으로 변환 가능)
// 문자열
console.log('6: ' + (parseInt('0')));
console.log('7: ' + (parseInt('-1')));
console.log('8: ' + (parseInt('10.53')));


// 3. + 단항 산술 연산자를 이용
// 문자열
console.log('9: ' + (+'0'));
console.log('10: ' + (+'-1'));
console.log('11: ' + (+'10.53'));

// 불리언
console.log('12: ' + (+true));
console.log('13: ' + (+false));


// 4. * 산술 연산자를 이용
// 문자열
console.log('14: ' + ('0' * 1));
console.log('15: ' + ('-1' * 1));
console.log('16: ' + ('10.53' * 1));

// 불리언
console.log('16: ' + (true * 1));
console.log('16: ' + (false * 1));