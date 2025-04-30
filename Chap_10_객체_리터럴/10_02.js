// p.130

/*
프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드(method)라 부름
=> 객체에 묶여 있는 함수
*/

var circle = {
    radius: 5,

    getDiameter : function(){
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());