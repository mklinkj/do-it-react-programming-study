// 02-6 객체 확장 표현식과 구조 분해 할당

// ES6의 자바 스크립트의 구조 분해 사용방법 알아보기 - 구조할당에 전개연산자 사용
var [item1, ...otherItems] = [0, 1, 2];
console.log('(1)', item1, otherItems);

var { key1, ...others } = { key1: 'one', key2: 'two' };
console.log('(2)', key1, others);
