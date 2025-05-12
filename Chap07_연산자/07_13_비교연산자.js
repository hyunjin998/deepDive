// p.81

// 동등 비교, 결과를 예측하기 어려움
// 안티 패턴
console.log('1: ' + ('0' == ''));
console.log('2: ' + (0 == ''));
console.log('3: ' + (0 == '0'));
console.log('4: ' + (false == 'false'));
console.log('5: ' + (false == '0'));
console.log('6: ' + (false == null));
console.log('7: ' + (false == undefined));