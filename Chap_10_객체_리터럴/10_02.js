// p.132

/*
프로퍼티에 접근하는 방법
1. 마침표 표기법(dot notation): 마침표 프로퍼티 접근 연산자(.)를 사용
2. 대괄포 표기법(bracket notation): 프로퍼티 접근 연산자([...])를 사용

대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 함
객체에 존재하지 않는 프로퍼티에 접근하면 ReferenceError가 아니라 undefined를 반환함
*/


/*
person.last-name의 실행 결과는 Node.js 환경에서 "ReferenceError: name is not defined"이고, 브라우저 환경에서는 NaN임

person.last-name을 실행할 때 자바스크립트 엔진은 먼저 person.last를 평가
person 객체에는 프로퍼티 키가 last인 프로퍼티가 없기 때문에 person.last는 undefined로 평가됨
=> person.last-name 은 undefined-name 과 같고, 다음으로 자바스크립트 엔진은 프로퍼티 키가 아니라 name이라는 식별자를 찾음

Node.js 환경에서는 어디에도 name이라는 식별자(변수, 함수 등의 이름) 선언이 없으므로 "ReferenceError: name is not defined" 에러가 발생
브라우저 환경에서 name이라는 전역 변수 (전역 객체 window의 프로퍼티)가 암묵적으로 존재하기 때문에,
전역 변수 name은 창(window)의 이름을 가리키며, 기본값으로 빈 문자열을 가져,
person.last-name 은 undefined-''과 같으므로 NaN이 됨
*/

var person = {
	'last-name' : 'Lee',
	1: 10
};

// console.log(person.'last-name');  // SyntaxError: Unexpected string
// console.log(person.last-name);  // 브라우저 환경 : NaN
																	 // Node.js 환경 : ReferenceError: name is not defined

// console.log(person[last-name]);  // ReferenceError: last is not defined
console.log(person['last-name']);

// console.log(person[1]);  // SyntaxError: Unexpected Number
// console.log(person.'1');  // SyntaxError: Unexpected string
console.log(person[1]);
console.log(person['1']);