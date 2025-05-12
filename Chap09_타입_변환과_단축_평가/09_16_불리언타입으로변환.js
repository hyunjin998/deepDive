// p.117

/*
불리언 타입으로 변환
1. Boolean 생성자 함수를 new 연산자 없이 호출
2. ! 부정 논리 연산자를 두 번 사용
*/


// 1. Boolean 생성자 함수를 new 연산자 없이 호출
// 문자열
console.log('1: ' + Boolean('x'));
console.log('2: ' + Boolean(''));
console.log('3: ' + Boolean('false'));

// 숫자
console.log('4: ' + Boolean(0));
console.log('5: ' + Boolean(1));
console.log('6: ' + Boolean(NaN));
console.log('7: ' + Boolean(Infinity));

// null
console.log('8: ' + Boolean(null));

// undefined
console.log('9: ' + Boolean(undefined));

// 객체
console.log('10: ' + Boolean({}));
console.log('11: ' + Boolean([]));


// 2. ! 부정 논리 연산자를 두 번 사용
// 문자열
console.log('12: ' + (!!'x'));
console.log('13: ' + (!!''));
console.log('14: ' + (!!'false'));

// 숫자
console.log('15: ' + (!!0));
console.log('16: ' + (!!1));
console.log('17: ' + (!!NaN));
console.log('18: ' + (!!Infinity));

// null
console.log('18: ' + (!!null));

// undefined
console.log('18: ' + (!!undefined));

// 객체
console.log('18: ' + (!!{}));
console.log('18: ' + (!![]));