const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("구현 기능 목록 Test", () => {
  const app = new App();

  test("메시지 출력", () => {
    const logSpy = getLogSpy();

    app.printGameMsg("안녕하세요.");
    expect(logSpy).toHaveBeenCalledWith("안녕하세요.");
  });

  test("1부터 9까지 서로 다른 수로 이루어진 컴퓨터의 3자리 수 배열을 생성하는 경우 ", () => {
    const computerNumArr = app.getComputerNum();
    const set = new Set(computerNumArr);

    expect(computerNumArr).not.toContain(0); // 1부터 9까지인지
    expect(computerNumArr).toHaveLength(3); // 3자리인지
    expect(Array.from(set)).toHaveLength(3); // 서로 다른 수인지
  });
});