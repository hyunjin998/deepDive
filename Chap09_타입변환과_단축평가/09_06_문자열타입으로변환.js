// p. 111

// 심벌 타입
// TypeError: Cannot convert a Symbol value to a string
// console.log('1: ' + (Symbol() + ''));

// 객체 타입
console.log((({})) + '');  // "[object Object]"
console.log((Math + ''));  // "[object Math]"
console.log(([] + ''));  // ""
console.log(([10, 20] + ''));  // "10,20"
console.log((function(){} + ''));  // "function(){}"
console.log((Array + ''));  // "function Array() { [native code] }"