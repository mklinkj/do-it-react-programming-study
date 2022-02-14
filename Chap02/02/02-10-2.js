// 02-9 비동기 함수

// ES6의 비동기 함수 처리 방법 알아보기 - Promise 사용 - 지연 작업 합치기
const work1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업1 완료'), 1000);
  });

const work2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업2 완료'), 2000);
  });

const work3 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업3 완료'), 3000);
  });

function urgentWork() {
  console.log('긴급 작업');
}

const nextWorkOnDone = (msg1) => {
  console.log(`done afer 1000ms: ${msg1}`);
  return work2();
};

const work1and2 = () =>
  work1().then((msg1) => {
    console.log(`done after 1000ms: ${msg1}`);
    return work2();
  });

work1and2()
  .then((msg2) => {
    console.log(`done after 2000ms: ${msg2}`);
    return work3();
  })
  .then((msg3) => {
    console.log(`done after 3000ms: ${msg3}`);
  });

urgentWork();
