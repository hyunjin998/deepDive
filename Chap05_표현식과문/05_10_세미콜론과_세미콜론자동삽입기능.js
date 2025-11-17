// p.56

/*
if문, for문, 함수 등의 코드 블록은 언제나 문의 종료를 의미하는 자체 종결성(self-closing)을 갖기 때문에
0개 이상의 문을 중괄호로 묶은 코드 블록({...}) 뒤에는 세미콜론을 붙이지 않음

세미콜론 자동 삽입 기능(ASI: automatic semicolon insertion)
자바스크립트 엔진이 소스코드를 해석할 때 문의 끝이라고 예측되는 지점에 자동으로 세미콜론을 붙여줌

하지만 세미콜론 자동 삽입 기능의 동작과 개발자의 예측이 일치하지 않는 경우도 있음
*/


function foo() {
    return
    {}
    // ASI의 동작 결과 => return; {};
    // 개발자의 에측 => return {};
}

console.log(foo());

var bar = function() {}
(function() {})();

// ASI의 동작 결과 => var bar = function() {}(function() {})();
// 개발자의 예측 => var bar = function() {}; (function() {})();
// TypeError: (intermediate value)(...) is not a function