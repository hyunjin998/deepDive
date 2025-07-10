// p. 186

/*
- 순수 함수(pure function): 어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 부수 효과가 없는 함수
순수 함수는 동일한 인수가 전달되면 언제나 동일한 값을 반환
=> 오직 매개변수를 통해 함수 내부로 전달된 인수에게만 의존해 반환값을 만듦
*/

var count = 0;  // 현재 카운트를 나타내는 상태

// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 전달
function increase(n){
	return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count);

count = increase(count);
console.log(count);


/*
- 비순수 함수(impure function): 외부 상태에 의존하거나 외부 상태를 변경하는, 부수 효과가 있는 함수
함수가 외부 상태를 변경하면 상태 변화를 추적하기 어려워지기 때문에 함수 외부 상태의 변경을 지양하는 순수 함수를 사용하는 것이 좋음
 */

var count = 0; // 현재 카운트를 나타내는 상태 : increase 함수에 의해 변화

// 비순수 함수
function increase(){
	return ++count;  // 외부 상태에 의존하며 외부 상태를 변경ㅎ마
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워짐
increase();
console.log(count);

increase();
console.log(count);