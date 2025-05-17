// p. 202

/*
변수의 생명 주기는 메모리 공간이 확보(allocate)된 시점부터 메모리 공간이 해제(release)되어 가용 메모리 풀(memory pool)에 반환되는 시점까지임

일반적으로 함수가 종료하면 함수가 생성한 스코프도 소멸하지만 누군가가 스코프를 참조하고 있다면 스코프는 해제되지 않고 생존함

호이스팅은 스코프 단위로 동작함
*/

var x = 'global';

function foo(){
	console.log(x);
	var x = 'local';
}

foo();
console.log(x);


/*
전역 객체(global object): 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체
전역 객체는 클라이언트 사이드 환경(브라우저)에서는 window, 서버 사이드 환경(Node.js)에서는 global 객체를 의미함
전역 객체는 표준 빌트인 객체(Object, String, Number, Function, Array,,,)와 환경에 따른 호스트 객체(클라이언트 Web API 또는 Node.js의 호스트 API), 그리고 var 키워드로 선언한 전역 변수와 전역 함수를 프로퍼티로 가짐
var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명 주기와 일치
*/