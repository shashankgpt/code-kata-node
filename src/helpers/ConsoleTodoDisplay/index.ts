import { Todo, ITodoDisplay } from "../../type";

export default class ConsoleTodoDisplay implements ITodoDisplay {
    display(todos: Todo[]): void {
      if (!todos.length) {
        console.log("No todos found");
      }
      todos.forEach(({ id, title, completed }) => {
        console.log(`Id: ${id} ${completed ? "[x]" : "[ ]"} - ${title}`);
      });
    }
  }