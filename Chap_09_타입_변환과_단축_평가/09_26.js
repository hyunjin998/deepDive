// p.122

/*
옵셔널 체이닝(optional chaining) 연산자 ?. 는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고,
그렇지 않으면 우항의 프로퍼티 참조를 이어감
*/

var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어감
var value = elem?.value;
console.log('1: ' + value);


/*
객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때 유용함
옵셔널 체이닝 연산자 ?. 가 도입되기 이전에는 논리 연산자 &&를 사용한 단축 평가를 통해 변수가 null 또는 undefined인지 확인함
*/

var elem = null;

// elem이 Falsy 값이면 elem으로 평가되고, elem이 Truthy 값이면 elem.value로 평가됨
var value = elem && elem.value;
console.log('2: ' + value);


/*
논리 연산자 &&는 좌항 피연산자가 false로 평가되는 Falsy 값 (false, undefined, null, 0, -0, NaN, '')이면 좌항 피연산자를 그대로 반환하지만
0이나 ''은 객체로 평가될 때도 있음
*/

var str = '';

// 문자열의 길이(length)를 참조
var length = str && str.length;

// 문자열의 길이(length)를 참조하지 못함
console.log('3: ' + length);


/*
하지만 옵셔널 체이닝 연산자 ?.는 좌항 피연산자가 false로 평가되는 Falsy 값 (false, undefined, null, 0, -0, NaN, '')이라도
null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어감
*/

var str = '';

// 문자열의 길이(length)를 참조. 이때 좌항 피연산자가 false로 평가되는 Falsy 값이라도
// null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어감
var length = str?.length;
console.log('4: ' + length);