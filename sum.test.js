const { sum, sumOf } = require("./sum");

// test 함수 -> 새로운 테스트 케이스 생성
// expect -> 특정 값이 ~일 것이다라고 사전에 정의를 하고, 통과를 하면 테스트를 성공시키고 아니면 실패
// toBe -> matchers라고 부름(함수). 특정 값이 어떤 조건을 만족하는지, 어떤 함수가 실행 됐는지, 에러가 났는지 확인
// it -> test와 똑같이 동작 -> 테스트 케이스 설명을 영어로 작성
// describe로 여러 테스트 케이스를 하나로 묶자
// test 케이스를 작성해놓으면 리팩토링이 간편하다!

describe("sum", () => {
  test("1+2 = 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("calculates all numbers", () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});
