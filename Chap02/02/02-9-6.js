// 02-8 배열 함수

// ES6의 map() 함수 사용 방법 알아보기
function parse(qs) {
  const queryString = qs.substr(1); // 쿼리스트링의 첫번째 문자를 ?로 간주해서 이런 것 같다.
  const chunks = queryString.split('&');
  let result = chunks
    .map((chunk) => {
      const [key, value] = chunk.split('=');
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});

  return result;
}

console.log(parse('?banana=10&apple=20&orange=30'));
/*
  { banana: '10', apple: '20', orange: '30' }
*/
