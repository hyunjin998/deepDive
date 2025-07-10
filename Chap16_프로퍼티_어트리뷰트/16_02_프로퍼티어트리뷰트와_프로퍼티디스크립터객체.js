// p.220

/*
자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의함
프로퍼티의 상태 :
	- 프로퍼티 값 (value),
	- 값의 갱신 가능 여부 (writable)
	- 열거 가능 여부 (enumerable)
	- 재정의 가능 여부(configurable)

프로퍼티 어트리뷰트 : 자바스크립트 엔진이 관리하는 내부 상태 값(meta-property)인 내부 슬롯 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
따라서, 프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnPropertyDescriptor 메서들르 사용해 간접적으로 확인할 수 있음
*/

const person = {
	name: 'Lee'
};

// 프로퍼티 어트리뷰트는 정보를 제공하는 프로퍼티 디스크립터 객체를 반환함
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {value: "Lee", writable: true, enumerable: true, configurable: true}


/*
Object.getOwnPropertyDescriptor 메서드를 호출할 때
첫 번째 매개변수에는 객체의 참조를 전달하고, 두 번째 매개변수에는 프로퍼티 키를 문자열로 전달함

이때 Object.getOwnPropertyDescriptor 메서드는 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 (PropertyDescriptor) 객체를 반환하며
만약 존재하지 않는 프로퍼티나 상속받은 프로퍼티에 대한 프로퍼티 디스크립터를 요구하면 undefined가 됨

- Object.getOwnPropertyDescriptor 메서드 : 하나의 프로퍼티에 대해 프로퍼티 디스크립터 객체를 반환
- Object.getOwnPropertyDescriptors 메서드 : 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환함
*/


// 프로퍼티 동적 생성
person.age = 20;

// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환
console.log(Object.getOwnPropertyDescriptors(person));

/*
{
name: { value: "Lee", writable: true, enumerable: true, configurable: true},
age: { value: 20, writable: true, enumerable: true, configurable: true}
}
*/