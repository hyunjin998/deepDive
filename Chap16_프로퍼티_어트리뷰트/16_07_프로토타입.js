// p.255

/*
프로토타입(prototype)
- 어떤 객체의 상위(부모) 객체의 역할을 하는 객체
- 하위(자식) 객체에게 자신의 프로퍼티와 메서드를 상속함
- 프로토타입 객체의 프로퍼티나 메서드를 상속받은 하위 객체는 자신의 프로퍼티 또는 메서드인 것처럼 자유롭게 사용할 수 있음

- 프로토타입 체인은 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는 상속 구조를 말함
- 객체의 프로퍼티나 메서드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메서드가 없다면 프로토타입 체인을 따라 프로토타입의 프로퍼티나 메서드를 차례대로 검색함
*/

// 일반 객체의 __proto__는 접근자 프로퍼티
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// { get: f, set: f, enumerable: false, configurable: true}

// 함수 객체의 prototype은 데이터 프로퍼티
Object.getOwnPropertyDescriptor(function() {}, 'prototype');
// { value: {...}, writable: true, enumerable: false, configurable: false}