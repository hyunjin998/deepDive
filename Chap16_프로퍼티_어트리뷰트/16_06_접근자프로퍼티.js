// p.224

/*
- 접근자 프로퍼티(accessor property) : 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수(accessor function)로 구성된 프로퍼티
[[Get]], [[Set]], [[Enumerable]], [[Configurable]]
*/

const person = {
	// 데이터 프로퍼티
	firstName: 'Ungmo',
	lastNmae: 'Lee',

	// fullName은 접근자 함수로 구성된 접근자 프로퍼티
	// getter 함수
	get fullName(){
		return `${this.firstName} ${this.lastName}`;
	},

	// setter 함수
	set fullName(name){
		// 배열 디스트럭처리 할당
		[this.firstName, this.lastName] = name.split(' ');
	}
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + ' ' + person.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수 호출
person.fullName = 'Heegun Lee';
console.log(person);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출됨
console.log(person.fullName);

// firstName은 데이터 프로퍼티
// 데이터 프로퍼티는 [[Value]], [[Wirtable]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 가짐
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);
// { value: "Heegun", writable: true, enumerable: true, configurable: true}

// fullName은 접근자 프로퍼티
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 가짐
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);
// {get: f, set: f, enumerable: true, configurable: true}


/*
접근자 프로퍼티는 자체적으로 값(프로퍼티 어트리뷰트 [[Value]])을 가지지 않으며 데이터 프로퍼티의 값을 읽거나 저장할 때 관여할 뿐임

접근자 프로퍼티 fullName으로 프로퍼티 값에 접근하면 내부적으로 [[Get]] 내부 메서드가 호출되어 다음과 같이 동작함
1. 프로퍼티 키가 유효한지 확인한다. 프로퍼티 키는 문자열 또는 심벌이어야 한다. 프로퍼티 키 "fullName"은 문자열이므로 유효한 프로퍼티 키다.
2. 프로토타입 체인에서 프로퍼티를 검색한다. person 객체에 fullName 프로퍼티가 존재한다.
3. 검색된 fullName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인한다. fullName 프로퍼티는 접근자 프로퍼티다.
4. 접근자 프로퍼티 fullName의 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수를 호출해 그 결과를 반환한다. 프로퍼티 fullName의 프로퍼티 어트리뷰트 [[Get]]의 값은 Object.getWonPropertyDescriptor 메서드가 반환하는 프로퍼티 디스크립터 (PropertyDescriptor) 객체의 get 프로퍼티 값과 같다.
*/