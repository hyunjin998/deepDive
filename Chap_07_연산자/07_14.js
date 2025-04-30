// p.82


// 일치 비교
console.log('1: ' + (5 === 5));

// 암묵적 타입 변환을 하지 않고 값을 비교함
// 즉, 값과 타입이 모두 같은 경우만 true를 반환
console.log('2: ' + (5 === '5'));


// NaN은 자신과 일치하지 않는 유일한 값
console.log('3: ' + (NaN === NaN));


// isnaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환
console.log('4: ' + isNaN(NaN));
console.log('5: ' + isNaN(10));
console.log('6: ' + isNaN(1 + undefined));