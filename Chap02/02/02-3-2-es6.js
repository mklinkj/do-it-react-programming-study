// ES6의 객체 전개 연산자 사용방법 알아보기

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
  ...objectOne,
  ...objectTwo,
};

console.log('(1)', combined);

var combined = {
  ...objectTwo,
  ...objectOne,
};
console.log('(2)', combined);

var { other, ...others } = combined;
console.log('(3)', others);

// 책의 결과는 정렬이 되는데,  node 실행 결과에서는 정렬을 하지 않는다.
