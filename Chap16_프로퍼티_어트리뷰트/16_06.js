// p.224

/*
- 데이터 프로퍼티(data property) : 키와 값으로 구성된 일반적인 프로퍼티
- 접근자 프로퍼티(accessor property) : 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수(accessor function)로 구성된 프로퍼티
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

// fullName은 접근자 프로퍼티
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 가짐
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);