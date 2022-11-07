const Controller = require("../src/Controller");
const {Console} = require("@woowacourse/mission-utils");

describe("Controller 클래스 기능 테스트", () => {
  test("입력 길이가 유효한가 1", () => {
    const controller = new Controller();
    const result = controller.isValidInput([1]);
    expect(result).toEqual(false);
  });
  test("입력 길이가 유효한가 2", () => {
    const controller = new Controller();
    const result = controller.isValidInput([1,2]);
    expect(result).toEqual(false);
  });
  test("입력 길이가 유효한가 3", () => {
    const controller = new Controller();
    const result = controller.isValidInput([1,2,3]);
    expect(result).toEqual(true);
  });
  test("입력 길이가 유효한가 4", () => {
    const controller = new Controller();
    const result = controller.isValidInput([1,2,3,4]);
    expect(result).toEqual(false);
  });

  test("입력에 중복이 존재하는가 1", () => {
    const controller = new Controller();
    const result = controller.isValidInput([1,1,2]);
    expect(result).toEqual(false);
  });
  test("입력에 중복이 존재하는가 2", () => {
    const controller = new Controller();
    const result = controller.isValidInput([1,1,1]);
    expect(result).toEqual(false);
  });
  test("입력에 중복이 존재하는가 3", () => {
    const controller = new Controller();
    const result = controller.isValidInput([1,2,3]);
    expect(result).toEqual(true);
  });

  test("strike 수와 ball 수로 적절한 hint를 만드는가 1", () => {
    const controller = new Controller();
    const result = controller.makeHint(1,2);
    expect(result).toEqual('1스트라이크 2볼');
  });
  test("strike 수와 ball 수로 적절한 hint를 만드는가 2", () => {
    const controller = new Controller();
    const result = controller.makeHint(1,1);
    expect(result).toEqual("1스트라이크 1볼");
  });
  test("strike 수와 ball 수로 적절한 hint를 만드는가 3", () => {
    const controller = new Controller();
    const result = controller.makeHint(2,0);
    expect(result).toEqual("2스트라이크");
  });
  test("strike 수와 ball 수로 적절한 hint를 만드는가 4", () => {
    const controller = new Controller();
    const result = controller.makeHint(0,2);
    expect(result).toEqual("2볼");
  });

  test("입력과 정답 비교 1", () => {
    const controller = new Controller();
    const result = controller.compareAnswer([1,2,3],[1,2,3]);
    expect(result).toEqual('');
  });
  test("입력과 정답 비교 2", () => {
    const controller = new Controller();
    const result = controller.compareAnswer([3,2,1],[1,2,3]);
    expect(result).toEqual('1스트라이크 2볼');
  });
  test("입력과 정답 비교 3", () => {
    const controller = new Controller();
    const result = controller.compareAnswer([4,5,6],[1,2,3]);
    expect(result).toEqual('낫싱');
  });
  test("입력과 정답 비교 4", () => {
    const controller = new Controller();
    const result = controller.compareAnswer([4,5,6],[1,2,4]);
    expect(result).toEqual('1볼');
  });
  test("입력과 정답 비교 4", () => {
    const controller = new Controller();
    const result = controller.compareAnswer([4,5,6],[4,2,1]);
    expect(result).toEqual('1스트라이크');
  });
  Console.close();
});