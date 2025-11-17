// p.82


// 일치 비교
console.log(5 === 5);  // true

// 암묵적 타입 변환을 하지 않고 값을 비교함
// 즉, 값과 타입이 모두 같은 경우만 true를 반환
console.log(5 === '5');  // false


// NaN은 자신과 일치하지 않는 유일한 값
console.log(NaN === NaN);  // false


// isnaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환
console.log(isNaN(NaN));  // true
console.log(isNaN(10));  // false
console.log(isNaN(1 + undefined));  // true

// 양의 0과 음의 0 비교. 일치 비교/동등 비교 모두 결과는 true
console.log(0 === -0);  // true
console.log(0 == -0);  // true