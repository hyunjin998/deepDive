// p.81

// 동등 비교, 결과를 예측하기 어려움
// 안티 패턴
console.log('0' == '');  // false
console.log(0 == '');  // true
console.log(0 == '0');  // true
console.log(false == 'false');  // false
console.log(false == '0');  // true
console.log(false == null);  // false
console.log(false == undefined);  // false