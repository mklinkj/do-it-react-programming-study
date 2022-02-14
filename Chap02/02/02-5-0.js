// 기존 자바스크립트의 함수 사용 방법 알아보기

// JavaScript에서 함수를 선언하는 2가지 방법

function add(first, second) {
  return first + second;
}
console.log(typeof add === 'function');

var add = function (first, second) {
  return first + second;
};
console.log(typeof add === 'function');
