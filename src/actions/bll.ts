import { Todo, ITodoDisplay } from "../type";
import ConsoleTodoDisplay from "../ConsoleTodoDisplay";

const defaultCount = 20;
const maxCount = 100;

export function parseInput(countArg: string) {
  let count = defaultCount;
  if (
    countArg &&
    !Number.isNaN(Number(countArg)) &&
    Number.isInteger(Number(countArg))
  ) {
    count = Number.parseInt(countArg);
    if (count > maxCount) {
      throw new Error(`Count should be less than ${maxCount}`);
    }
  } else {
    console.warn(`Invalid input. Using default count of ${count}\n`);
  }
  return count;
}

export function displayTodos(todos: Todo[]): void {
  if (!todos.length) {
    console.log("No todos found");
  }
  const todoDisplay: ITodoDisplay = new ConsoleTodoDisplay();
  todoDisplay.display(todos);
}
