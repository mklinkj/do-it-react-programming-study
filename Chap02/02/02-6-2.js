// ES6의 클래스 사용방법 알아보기
class Shape {
  static create(x, y) {
    return new Shape(x, y);
  }

  name = 'Shape'; // constructor() 함수 안에 this.name = 'Shape'로 선언한것과 동일 - ES7에 추가된 구문,
  // 그런데.. node 10.x에서는 지원안되는 것 같다., 14.19.0에서는 가능.

  constructor(x, y) {
    this.move(x, 7);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  area() {
    return 0;
  }
}

var s = new Shape(0, 0);
console.log('s.area():', s.area());

// Shape를 상속한 Circle
class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  area() {
    if (this.radius === 0) {
      return super.area();
    }
    return this.radius * this.radius;
  }
}

var c = new Circle(0, 0, 10);
console.log('c.area():', c.area());
