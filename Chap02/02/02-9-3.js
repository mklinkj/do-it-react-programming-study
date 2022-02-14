// 02-8 배열 함수

// ES6의 forEach() 함수 사용 방법 알아보기 - 기존 방법 - forEach() 사용 및 분해 할당 사용
function parse(qs) {
  const queryString = qs.substr(1); // 쿼리스트링의 첫번째 문자를 ?로 간주해서 이런 것 같다.
  const chunks = queryString.split('&');
  let result = {};

  chunks.forEach((chunk) => {
    const [key, value] = chunk.split('=');
    result[key] = value;
  });

  return result;
}

console.log(parse('?banana=10&apple=20&orange=30'));
