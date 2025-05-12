// p.152

var person = {
	name: 'Lee'
};

// 참조 값을 복사(얕은 복사). copy와 person은 동일한 참조 값을 갖음
var copy = person;

// copy와 person은 동일한 객체를 참조
console.log(copy === person);

// 객체 변경
copy.name = 'Kim';
person.address = 'Seoul';

// copy와 person은 동일한 객체를 가리키기 때문에 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받음
console.log(person);
console.log(copy);



var person1 = {
	name: 'Lee'
};

var person2 = {
	name: 'Lee'
};

console.log(person1 === person2);
console.log(person1.name === person2.name);