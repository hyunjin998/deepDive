// p.44

/*
변수 선언(1)은 런타임 이전에 먼저 실행되고 값의 할당(2)은 런타임에 실행
따라서 score 변수에 값을 할당하는 시점(2)에는 이미 변수 선언이 완료된 상태이며, 이미 undefined로 초기화되어 있음
따라서 score 변수에 값을 할당하면 score 변수의 값은 undefined에서 새롭게 할당한 숫자 값 80으로 변경(재할당)됨
*/


console.log(score);

var score;  // 1
score = 80;  // 2

console.log(score);