// p.113

if('') console.log('1');
if(true) console.log('2');
if(0) console.log('3');
if('str') console.log('4');  // 비어있지 않은 문자열이기 때문에 출력
if(null) console.log('5');


/*
자바스크립트 엔진은 불리언 타입이 아닌 값을 Truth 값(참으로 평가되는 값) 또는 Falsy 값(거짓으로 평가되는 값)으로 구분함
Falsy 값: false, undefined, null, 0, -0, NaN, ''(빈 문자열)
*/


// 아래의 조건은 모두 코드 블록을 실행함
if (!false) console.log(false + ' is falsy value');
if (!undefined) console.log(undefined + ' is falsy value');
if (!null) console.log(null + ' is falsy value');
if (!0) console.log(0 + ' is falsy value');
if (!NaN) console.log(NaN + ' is falsy value');
if (!'') console.log('' + ' is falsy value');