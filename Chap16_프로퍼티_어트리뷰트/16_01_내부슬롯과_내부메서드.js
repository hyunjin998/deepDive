// p.219

/*
- 내부 슬롯 (internal slot)과 내부 메서드 (internal method)
ECMAScript 사양에 등장하는 이중 대괄호 ([[...]])로, 자바스크립트 엔진의 내부 로직이므로 원칙적으로는 직접적으로 접근하거나 호출할 수 있는 방법을 제공하지는 않으나 일부에 한하여 간접적으로 접근할 수 있음
*/

const o = {};

// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없음
// Uncaught SyntaxError: Unexcepted token '['
// o.[[Prototype]].

// 단, 일부 내부 슬롯과 내부 메서드에 한해 간접적으로 접근할 수 있는 수단을 제공하기는 함
o.__proto__ // Object.prototype