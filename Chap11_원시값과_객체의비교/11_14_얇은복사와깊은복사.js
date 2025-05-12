// p.150

/*
얕은 복사 (shallow copy) vs 깊은 복사 (deep copy)
객체를 프로퍼티 값으로 갖는 객체의 경우
- 얕은 복사 : 한 단계까지만 복사
- 깊은 복사 : 객체에 중첩되어 있는 객체까지 모두 복사
*/


const o = { x : {y:1} };

// 얕은 복사
const c1 = { ...o };
console.log('1: ' + (c1 === o));
console.log('2: ' + (c1.x === o.x));

// lodash의 cloneDeep을 사용한 깊은 복사
const _ = require('lodash');

// 깊은 복사
const c2 = _.cloneDeep(o);
console.log('3: ' + (c2 === o));
console.log('4: ' + (c2.x === o.x));


/*
얕은 복사와 깊은 복사로 생성된 객체는 원본과는 다른 객체
=> 원본과 복사본은 참조 값이 다른 별개의 객체

얕은 복사는 객체에 중첩되어 있는 객체의 경우 참조 값을 복사하고
깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사해서 원시 값처럼 완전한 복사본을 만든다는 차이가 있음

원시 값을 할당한 변수를 다른 변수에 할당하는 것을 깊은 복사,
객체를 할당한 변수를 다른 변수에 할당하는 것을 얕은 복사라 함
*/

const v = 1;

// 깊은 복사
const d1 = v;
console.log('5: ' + (d1 === v));

const o2 = {x:1};

// 얕은 복사
const d2 = o2;
console.log('6: ' + (d2 === o2));