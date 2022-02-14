// 02-6 객체 확장 표현식과 구조 분해 할당

// ES6의 객체 확장 표현식 사용방법 알아보기

var x = 0;
var y = 0;
var obj = { x, y };
console.log('(1)', obj);

var randomKeyString = 'other';
var combined = {
  ['one' + randomKeyString]: 'some value',
};
console.log('(2)', combined);

var obj2 = {
  x: x,
  methodA() {
    console.log('method A');
  },
  methodB() {
    return 0;
  },
};
