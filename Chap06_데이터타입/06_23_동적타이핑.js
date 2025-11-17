// p.71

var foo;
console.log(typeof foo);  // undefined


foo = 3;
console.log(typeof foo);  // number


foo = 'Hello';
console.log(typeof foo);  // string


foo = true;
console.log(typeof foo);  // boolean


foo = null;
console.log(typeof foo);  // object


foo = Symbol();
console.log(typeof foo);  // symbol


foo = {};
console.log(typeof foo);  // object


foo = [];
console.log(typeof foo);  // object


foo = function() {};
console.log(typeof foo);  // function