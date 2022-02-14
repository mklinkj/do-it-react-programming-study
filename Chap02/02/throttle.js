// 02-10 디바운스와 스로틀
// 스로틀의 개념 알아보기
// 입력되는 동안에도 바로 이전에 요청한 작업을 주기적으로 실행한다는 점.
// TODO: 브라우저에서 연동을 해서 돌려야할 것 같은데...

// 지연시간내에 빠른 입력을 무시한다는 의미같음..
function throttle(func, delay) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.call(context, ...args);
      lastRan = Date.now();
    } else {
      if (lastFunc) {
        clearTimeout(lastFunc);
      }
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= delay) {
          func.call(context, ...args);
          lastRan = Date.now();
        }
      }, delay - Date.now - lastRan);
    }
  };
}

var checkPosition = () => {
  const offset = 300;
  const currentScrollPosition = window.scrollY;
  const pageBottomPosition = document.body.offsetHeight - window.innerHeight - offset;
  if (currentScrollPosition >= pageBottomPosition) {
    // fetch('/page/next')
    console.log('다음 페이지 로딩');
  }
};

var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);
