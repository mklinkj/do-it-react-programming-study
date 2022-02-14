// 02-6 객체 확장 표현식과 구조 분해 할당

// ES6의 자바 스크립트의 구조 분해 사용방법 알아보기
var list = [0, 1];
var [item1, item2, item3 = -1] = list;
console.log('(1)', item1, item2);
console.log('(2)', item3);

// 값 교환
[item2, item1] = [item1, item2];
console.log('(3)', item1, item2);

var obj = {
  key1: 'one',
  key2: 'two',
};

var { key1: newKey1, key2, key3 = 'default key3 value' } = obj;

console.log('(4)', key2);
console.log('(5)', key3);
console.log('(6)', newKey1); // 콜론과 함깨 새 변수 명을 지정한 부분
