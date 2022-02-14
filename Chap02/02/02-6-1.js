// 기존 자바스크립트의 클래스 표현 알아보기 - 상속
function Shape(x, y) {
  this.name = 'Shape';
  this.move(x, y);
}

// static 함수를 선언하는 예제
Shape.create = function (x, y) {
  return new Shape(x, y);
};

Shape.prototype = {
  move: function (x, y) {
    this.x = x;
    this.y = y;
  },

  area: function () {
    return 0;
  },
};

var s = new Shape(0, 0);
console.log('s.area():', s.area());

function Circle(x, y, radius) {
  Shape.call(this, x, y);
  this.name = 'Circle';
  this.radius = radius;
}

// Object.assign
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
Object.assign(Circle.prototype, Shape.prototype, {
  area: function () {
    return this.radius * this.radius;
  },
});

var c = new Circle(0, 0, 10);
console.log('c.area():', c.area());
