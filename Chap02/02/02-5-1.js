// 기존 자바스크립트의 함수 사용 방법 알아보기

// ES6의 화살표 함수 사용 방법 알아보기

var add = (first, second) => {
  return first + second;
};
console.log(add(1, 2)); // 3

var add = (first, second) => first + second;
console.log(add(3, 4)); // 7

var addAndMultiple = (first, second) => ({ add: first + second, multipy: first * second });
console.log(addAndMultiple(5, 6)); // { add: 11, multipy: 30 }
