// p.170

/*
1. 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않음
2. 자바스크립트는 동적 타입 언어이기 때문에 매개변수의 타입을 사전에 지정할 수 없음
*/

function add1(x, y){
    return x + y;
}

console.log('add1: ' + add1(2));
console.log('add1: ' + add1('a', 'b'));


/*
따라서 자바스크립트의 경우 함수를 정의할 때 적절한 인수가 전달되었는지 확인이 필요함
이처럼 함수 내부에서 적절한 인수가 전달되었는지 확인하더라도 부적절한 호출을 사전에 방지할 수는 없고 에러는 런타임에 발생하게 됨
*/

function add2(x, y){
    if(typeof x != 'number' || typeof y != 'number'){
        // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킴
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }

    return x + y;
}

// TypeError
// console.log('add2: ' + add2(2));
// TypeError
// console.log('add2: ' + add2('a', 'b'));

/*
arguments 객체를 통해 인수 개수를 확인할 수도 있고
인수가 전달되지 않은 경우 단축 평가를 사용해 매개변수에 기본값을 할당하는 방법도 있음
*/


function add3(a, b, c){
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log('add3: ' + add3(1, 2, 3));
console.log('add3: ' + add3(1, 2));
console.log('add3: ' + add3(1));
console.log('add3: ' + add3());



/*
매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화할 수 있음
매개변수 기본값은 매개변수에 인수를 전달하지 않았을 경우와 undefined를 전달한 경우에만 유효함
*/

function add4(a = 0, b = 0, c = 0){
    return a + b + c;
}

console.log('add4: ' + add4(1, 2, 3));
console.log('add4: ' + add4(1, 2));
console.log('add4: ' + add4(1));
console.log('add4: ' + add4());