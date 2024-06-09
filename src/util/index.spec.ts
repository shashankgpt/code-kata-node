import { Todo } from "../type";
import { displayTodos, getEvenNumber } from "./";

describe("getEvenNumber", () => {
  it("should return an array of even numbers", () => {
    expect(getEvenNumber(2)).toEqual([2, 4]);
  });

  it("should return empty array", () => {
    expect(getEvenNumber(0)).toEqual([]);
  });
});

describe("displayTodos", () => {
  const mockLog = jest.fn();
  beforeAll(() => {
    console.log = mockLog;
  });

  beforeEach(() => {
    mockLog.mockReset();
  });

  it("When empty array is given should display No todos found", () => {
    displayTodos([]);
    expect(mockLog.mock.calls).toEqual([["No todos found"]]);
  });

  it("should display todos with correct format", () => {
    const todos: Todo[] = [
      { id: 1, title: "Todo 1", completed: true },
      { id: 2, title: "Todo 2", completed: false },
    ];
    displayTodos(todos);
    expect(mockLog.mock.calls).toEqual([
      ["Id:1 [x] - Todo 1"],
      ["Id:2 [ ] - Todo 2"],
    ]);
  });
});
