// 02-8 배열 함수

// ES6의 forEach() 함수 사용 방법 알아보기 - 기존 방법 - 값을 숫자로 변경
function parse(qs) {
  var queryString = qs.substr(1); // 쿼리스트링의 첫번째 문자를 ?로 간주해서 이런 것 같다.
  var chunks = queryString.split('&');
  var result = {};

  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = Number.isNaN(parts[1]) ? parts[1] : Number(parts[1]);
    result[key] = value;
  }
  return result;
}

console.log(parse('?banana=10&apple=20&orange=30'));
