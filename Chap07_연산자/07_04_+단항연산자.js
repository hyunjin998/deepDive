// p.76

/*
prefix/postfix increment/decrement operator
피연산자 앞에 위치한 전위 증가/감소 연산자는 먼저 피연산자의 값을 증가/감소시킨 후, 다른 연산을 수행
피연산자 뒤에 위치한 후위 증가/감소 연산자는 먼저 다른 연산을 수행한 후, 피연산자의 값을 증가/감소
*/


idx = 1;
var x = 5, result;

// 선할당 후증가
result = x++;
console.log(result, x);

// 선증가 후할당
result = ++x;
console.log(result, x);

// 선할당 후감소
result = x--;
console.log(result, x);

// 선감소 후할당
result = --x;
console.log(result, x);