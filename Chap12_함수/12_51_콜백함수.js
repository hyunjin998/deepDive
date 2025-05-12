// p.184

/*
- 콜백 함수 (callback function): 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수

- 고차 함수 (Higher-Order Function, HOF): 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수.
매개변수를 통해 함수를 전달받거나 반환값으로 함수를 반환하는 함수
고차 함수는 콜백 함수를 자신의 일부분으로 합성함
고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출
=> 콜백 함수는 고차 함수에 의해 호출되며 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있음
=> 따라서 고차 함수에 콜백 함수를 전달할 때 콜백 함수를 호출하지 않고 함수 자체를 전달해야 함
 */


// 외부에서 전달받은 f를 n만큼 반복 호출
function repeat(n, f){
	for(var i=0; i<n; i++){
		f(i);  // i를 전달하면서 f 호출
	}
}

var logAll = function(i){
	console.log(i);
};

// 반복 호출할 함수를 인수로 전달
repeat(5, logAll);

var logOdds = function(i){
	if(i%2) console.log(i);
};

// 반복 호출할 함수를 인수로 전달
repeat(5, logOdds);


/*
이때 콜백 함수로서 전달된 함수 리터럴은 고차 함수가 호출될 때마다 평가돼 함수 객체를 생성함
=> 콜백 함수를 다른 곳에서도 호출할 필요가 있거나, 콜백 함수를 전달받는 함수가 자주 호출된다면 함수부에서 콜백 함수를 정의한 후 함수 참조를 고차 함수에 전달하는 편이 효율적
*/


// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달
// 익명 함수 리터럴을 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성
repeat(5, function(i){
	if(i%2) console.log(i);
});


/*
콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로 고차 함수에 전달하면 고차 함수가 호출될 때마다 콜백 함수가 생성됨
*/


// logOdds 함수는 단 한 번만 생성
var logOdds = function(i){
	if(i%2) console.log(i);
};

// 고차 함수에 함수 참조를 전달
repeat(5, logOdds);


/*
콜백 함수는 함수형 패러다임뿐만 아니라 비동기 처리(이벤트 처리, Ajax 통신, 타이머 함수 등)에도 활용됨
*/

// document.getElementById('myButton').addEventListener('click', function(){
// 	console.log('button clicked!');
// });

// // 콜백 함수를 사용한 비동기 처리
// // 1초 후 메시지 출력
// setTimeout(function() {
// 	console.log('1초 경과');
// }, 1000);


/*
콜백 함수의 고차 함수 사용
*/

// 콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function(item){
	return item*2;
});

console.log(res);

// 콜백 함수를 사용하는 고차 함수 filter
res = [1, 2, 3].filter(function(item){
	return item%2;
});

console.log(res);

// 콜백 함수를 사용하는 고차 함수 reduce
res = [1, 2, 3].reduce(function(acc, cur){
	return acc + cur;
}, 0);

console.log(res);