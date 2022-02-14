// 기존 자바스크립트의 함수 사용 방법 알아보기

// ES6의 화살표 함수 사용 방법 알아보기 - this 범위로 생기는 오류를 피하기 위해 bind() 함수사용

class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);

    var addThis3 = (first, second) => this.value + first + second;
  }
}

// 이 예제는 무슨 의미인지 모르겠다?
