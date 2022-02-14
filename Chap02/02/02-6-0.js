// 기존 자바스크립트의 클래스 표현 알아보기
function Shape(x, y) {
  this.name = 'Shape';
  this.move(x, y);
}

// static 함수를 선언하는 예제
Shape.create = function (x, y) {
  return new Shape(x, y);
};

// 인스턴스 함수를 선언하는 예제
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

Shape.prototype.area = function () {
  return 0;
};

// 혹은 다음과 같이 인스턴스 함수 선언
/*
Shape.prototype = {
  move: function (x, y) {
    this.x = x;
    this.y = y;
  },

  area: function () {
    return 0;
  },
};
*/

var s = new Shape(0, 0);
console.log('s.area(): ', s.area());
