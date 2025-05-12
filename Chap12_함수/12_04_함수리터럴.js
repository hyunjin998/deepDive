// p.158

// 함수를 정의하는 방법

function add(x, y) {
	return x + y;
}

var add = function(x, y) {
	return x + y;
}

var add = new Function('x', 'y', 'return x+y');

var add = (x, y) => x+y;