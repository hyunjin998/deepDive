// p.123

/*
null 병합(nullish coalescing) 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고,
그렇지 않으면 좌항의 피연산자를 반환함.
null 병합 연산자 ??는 변수에 기본값을 설정할 때 유용
*/

// 좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고,
// 그렇지 않으면 좌항의 피연산자를 반환
var foo = null ?? 'default string';
console.log('1: ' + foo);


/*
null 병합 연산자 ??는 변수에 기본값을 설정할 때 유용함
null 병합 연산자 ??가 도입되기 이전에는 논리 연산자 ||를 사용한 단축 평가를 통해 변수에 기본값을 설정함
논리 연산자 ||를 사용한 단축 평가의 경우 좌항의 피연산자가 false로 평가되는 Falsy 값 (false, undefined, null, 0, -0, NaN, '')이면
우항의 피연산자를 반환함
만약 Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있음
*/

// Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있음
var foo = '' || 'default string';
console.log('2: ' + foo);


/*
하지만 null 병합 연산자 ??는 좌항의 피연산자가 false로 평가되는 Falsy 값(false, undefined, null, 0, -0, NaN, '')이라도
null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환함
*/

// 좌항의 피연산자가 Falsy 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 반환함
var foo = '' ?? 'default string';
console.log('3: ' + foo);