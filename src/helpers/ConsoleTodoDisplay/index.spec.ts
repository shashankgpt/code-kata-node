import ConsoleTodoDisplay from ".";
import { Todo } from "../../type";

describe('ConsoleTodoDisplay', () => {
    const mockLog = jest.fn();
    const todoDisplay: any = new ConsoleTodoDisplay();
    beforeAll(() => {
      console.log = mockLog;
    });
  
    beforeEach(() => {
      mockLog.mockReset();
    });

    it('When empty array is given should display No todos found', () => {
        todoDisplay.display([])
        expect(mockLog).toHaveBeenCalledWith("No todos found");
    });

    it("should display todos with correct format", () => {
        const todos: Todo[] = [
          { id: 1, title: "Todo 1", completed: true },
          { id: 2, title: "Todo 2", completed: false },
        ];
        todoDisplay.display(todos)
        expect(mockLog.mock.calls).toEqual([
          ["Id: 1 [x] - Todo 1"],
          ["Id: 2 [ ] - Todo 2"],
        ]);
      });
})