// 기존 자바스크립트의 함수 사용 방법 알아보기

// ES6의 화살표 함수 사용 방법 알아보기 - 계단형 함수 선언
// 커링(currying)과 같은 디자인 패턴

function addNumber(num) {
  return function (value) {
    return num + value;
  };
}

console.log(addNumber(5)(4));

var addNumber2 = (num) => (value) => num + value;

console.log(addNumber2(5)(4));
