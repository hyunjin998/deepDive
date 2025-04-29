// p.118

/*
단축 평가(short-circuit evaluation)
논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환

논리곱 연산자는 두 번째 피연산자가 표현식의 평가 결과를 결정
논리합 연산자는 첫 번째 피연산자가 표현식의 평가 결과를 결정
*/


console.log('Cat' && 'Dog');
console.log('Cat' || 'Dog');