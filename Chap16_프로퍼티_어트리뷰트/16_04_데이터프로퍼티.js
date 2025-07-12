// p.222

/*
- 데이터 프로퍼티 (data property) : 키와 값으로 구성된 일반적인 프로퍼티
[[Value]], [[Writable]], [[Enumerable]], [[Configurable]]

프로퍼티가 생성될 때 [[Value]]의 값은 프로퍼티 값으로 초기화되며 [[Writable]], [[Enumerable]], [[Configurable]]의 값은 true로 초기화됨
프로퍼티를 동적 추가해도 마찬가지
*/

const person = {
	name: 'Lee'
};

// 프로퍼티 동적 생성
person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));

/*
{
name: {value: "Lee", writable: true, enumerable: true, configurable: true},
age: {value: 20, writable: true, enumerable: true, configurable: true}
}
*/
