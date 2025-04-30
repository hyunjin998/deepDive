// p.91

// 부수 효과가 있는 연산자: 할당 연산자(=), 증가/감소 연산자(++/--), delete 연산자


var x;

x = 1;
console.log(x);

x++;
console.log(x);

var o = { a: 1 };

delete o.a;
console.log(o);