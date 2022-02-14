// ES6의 객체 전개 연산자 사용방법 알아보기

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};

console.log('(1)', combined);

var combined = Object.assign({}, objectOne, objectTwo);
console.log('(2)', combined);

var combined = Object.assign({}, objectTwo, objectOne);
console.log('(3)', combined); // 중복된 키값이 있으면 이후에 전달된 객체의 값으로 덮어씀.

var others = Object.assign({}, combined);
delete others.other;
console.log('(4)', others);
