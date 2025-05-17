// p.209
var x= 1;

if(true){
	var x= 10;
}

console.log(x);


var i = 10;

// for문에서 선언한 i는 전역변수. 이미 선언된 전역 변수 i가 있으므로 중복 선언됨
for(var i=0; i<5; i++){
	console.log(i);
}

// 의도치 않게 i 변수의 값이 변경됨
console.log(i);