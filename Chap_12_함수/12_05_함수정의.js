// p.159

// 함수 선언문
function add(x, y) {
	return x, y;
}

// 함수 참조
// console.dir은 console.log와는 달리 함수 객체의 프로퍼티까지 출력함
// 단, Node.js 환경에서는 console.log와 같은 결과가 출력됨
console.dir(add);

// 함수 호출
console.log(add(2, 5));