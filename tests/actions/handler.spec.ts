import { handleGetTodoCommand } from "../../src/actions/handler";
const logMock = jest.fn();
console.log = logMock;

const errorLog = jest.fn();
console.error = errorLog;

const warnLog = jest.fn();
console.warn = warnLog;

describe("handleGetTodoCommand", () => {
  beforeEach(() => {
    logMock.mockReset();
    errorLog.mockReset();
    warnLog.mockReset();
  });
  describe("When API request is success", () => {
    it("should display todo list", async () => {
      await handleGetTodoCommand(2, {even: true});
      expect(logMock).toHaveBeenCalledTimes(3);
      expect(logMock.mock.calls).toMatchObject([
        ["Fetching even todo list..."],
        ["Id:2 [ ] - quis ut nam facilis et officia qui"],
        ["Id:4 [x] - et porro tempora"],
      ]);
    });
  });

  describe("When API request is fail", () => {
    beforeAll(() => {
      jest.spyOn(global, "fetch").mockRejectedValue(new Error("error"));
    });

    it("should display error", async () => {
      await handleGetTodoCommand(1, {even: true});
      expect(errorLog).toHaveBeenCalledTimes(1);
      expect(errorLog).toHaveBeenCalledWith(new Error("error"));
    });
  });

  describe("When invalid input is given", () => {
    it("should display error", async () => {
      await handleGetTodoCommand("invalid", {even: true});
      expect(warnLog).toHaveBeenCalledTimes(1);
      expect(warnLog).toHaveBeenCalledWith(
        "Invalid input. Using default count of 20\n"
      );
    });
  });
});
