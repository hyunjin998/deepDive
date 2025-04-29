// p.71

var foo;
console.log('1: ' + typeof foo);


foo = 3;
console.log('2: ' + typeof foo);


foo = 'Hello';
console.log('3: ' + typeof foo);


foo = true;
console.log('4: ' + typeof foo);


foo = null;
console.log('5: ' + typeof foo);


foo = Symbol();
console.log('6: ' + typeof foo);


foo = {};
console.log('7: ' + typeof foo);


foo = [];
console.log('8: ' + typeof foo);


foo = function() {};
console.log('9: ' + typeof foo);