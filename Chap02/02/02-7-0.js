// 02-6 객체 확장 표현식과 구조 분해 할당

// 기존 자바스크립트의 객체 확장 표현식 사용방법 알아보기

var x = 0;
var y = 0;
var obj = { x: x, y: y };
console.log('(1)', obj);

var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';
console.log('(2)', combined);

// 객체에 함수를 추가할 때는 변수에 함수를 할당해야함.
var obj2 = {
  x: x,
  methodA: function () {
    console.log('method A');
  },
  methodB: function () {
    return 0;
  },
};
