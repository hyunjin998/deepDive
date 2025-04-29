// p.121

/*
단축 평가의 유용한 패턴

1. 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
만약 객체를 가리키기를 기대하는 변수의 값이 객체가 아니라 null 또는 undefined인 경우 객체의 프로퍼티를 참조하면 타입 에러가 발생함 -> 프로그램 강제 종료
*/

var elem = null;

// TypeError: Cannot read property 'value' of null
// var value = elem.value;
// console.log(value);

// 이때 단축 평가를 사용하면 에러를 발생시키지 않음
var value = elem && elem.value;
console.log(value);


/*
2. 함수 매개변수에 기본값을 설정할 때
함수를 호출할 때 인수를 전달하지 않으먼 매개변수에는 undefined가 할당됨
이때 단축 평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있음
*/

// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength();
getStringLength('hi');

// ES6의 매개변수의 기본값 설정
function getStringLength(str = ''){
    return str.length;
}

getStringLength();
getStringLength('hi');