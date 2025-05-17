// p.204

/*
1. 즉시 실행 함수
함수 정의와 동시에 호출되는 즉시 실행 함수는 단 한 번만 호출되기 때문에 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 됨
*/

( function(){
		var foo = 10;  // 즉시 실행 함수의 지역 변수
}());

// ReferenceError: foo is not defined
// console.log(foo);


/*
2. 네임스페이스 객체
전역에 네임스페이스(namespace) 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법
네임스페이스 객체에 또 다른 네임스페이스 객체를 프로퍼티로 추가해 네임스페이스를 게층적으로 구성할 수도 있음
하지만 네임스페이스를 분리해 식별자 충돌을 방지하는 효과는 있으나 네임스페이스 객체 자체가 전역 변수에 할당되므로 그다지 유용하지 않을 수도 있음
*/

var MYAPP = {};  // 전역 네임스페이스 객체
MYAPP.name = 'Lee';
console.log(MYAPP.name);  // Lee

MYAPP.person = {
	name: 'Lee',
	address: 'Seoul'
};

console.log(MYAPP.person.name);


/*
3. 모듈 패턴
모듈 패턴은 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만들음
모듈 패턴의 특징은 전역 변수의 억제는 물론 캡슐화까지 구현할 수 있다는 것임
캡슐화(encapsulation): 객체의 상태(state)를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작(behavior)인 메서드를 하나로 묶는 것을 말함
캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하며 이를 정보 은닉(information hding)이라 함

외부에 노출하고 싶은 변수나 함수를 담아 반환하면 반환되는 객체의 프로퍼티는 외부에 노출되는 퍼블릭 멤버(public member)임
외부로 노출하고 싶지 않은 변수나 함수는 반환하는 객체에 추가하지 않으면 외부에서 접근할 수 없는 프라이빗 멤버(private member)가 됨*/

var Counter = (function(){
	// private 변수
	var num = 0;

	// 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환
	return {
		increase(){
			return ++num;
		},
		decrease(){
			return --num;
		}
	};
})();

// private 변수는 외부로 노출되지 않음
console.log(Counter.num);  // undefined

console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());
