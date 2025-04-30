// p.77

/*
숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면 숫자 타입으로 변환해 반환
이때 피연산자를 변경하는 것은 아니고 숫자 타입으로 변환한 값을 생성해서 반환하므로 부수 효과는 없음
*/


var x = '1';

// 문자열 -> 숫자
console.log('1: ' + (+x));
console.log('2: ' + x);


// 불리언 -> 숫자
x = true;
console.log('3: ' + (+x));
console.log('4: ' + x);

x = false;
console.log('5: ' + (+x));
console.log('6: ' + x);


// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환
x = 'Hello';
console.log('7: ' + (+x));
console.log('8: ' + x);


// 부호 반전
console.log(-(-10));
console.log(-'10');
console.log(-true);
console.log(-'Hello');