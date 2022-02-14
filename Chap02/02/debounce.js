// 02-10 디바운스와 스로틀

// 디바운스
// 어떤 내용을 입력하다가 특정 시간동안 대기하고 있으면 마지막에 입력된 내용을 바탕으로 서버 요청을 하는 방법.
function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
}

const run = debounce((val) => console.log(val), 100);
run('a');
run('b');
run(2);

/*
  100ms 이후..
  2


  그러니까..
  100ms 이내에 호출이 이루어졌다면 이전 호출을 취소하게되서, 마지막 호출 2만 100ms를 기다리고 콘솔에 찍었다.
*/
