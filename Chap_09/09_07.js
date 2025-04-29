// p.112

/*
산술 연산자의 역할은 숫자 값을 만드는 것이므로, 산술 연산자의 모든 피연산자는 코드 문맥상 모두 숫자 타입이어야 함
이때 피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 표현식의 평가 결과는 NaN이 됨
*/


console.log('1: ' + (1 - '1'));
console.log('2: ' + (1 * '10'));
console.log('3: ' + (1 / 'one'));

console.log('4: ' + ('1' > 0));


// 문자열 타입
console.log('5: ' + (+''));
console.log('6: ' + (+'0'));
console.log('7: ' + (+'1'));
console.log('8: ' + (+'string'));


// 불리언 타입
console.log('9: ' + (+true));
console.log('10: ' + (+false));


// null 타입
console.log('11: ' + (+null));


// undefined 타입
console.log('12: ' + (+undefined));


// 심벌 타입
// TypeError: Cannot convert a Symbol value to a number
// console.log('13: ' + (+Symbol()));


// 객체 타입
console.log('14: ' + (+{}));
console.log('15: ' + (+[]));
console.log('16: ' + (+[10, 20]));
console.log('17: ' + (+(function(){})));