// p.164

// 함수 참조
console.dir(add);
console.dir(sub);

// 함수 호출
console.log(add(2, 5));
// TypeError: sub is not a function
// console.log(sub(2, 5));

// 함수 선언문
function add(x, y){
	return x+y;
}

// 함수 표현식
var sub = function(x, y){
	return x-y;
};