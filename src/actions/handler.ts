import TodoApi from "../ApiTodosFetcher";
import { getListSchema } from "../schema";
import { NumberType, ITodoDisplay } from "../type";
import { getNumberList } from "../util";
import { parseInput } from "./bll";
import ConsoleTodoDisplay from "../ConsoleTodoDisplay";

export async function handleGetTodoCommand(countArg: any, options: any) {
  try {
    if (!options.even) {
      throw new Error("Option --even is required");
    }
    console.log(`Fetching even todo list...`);
    let count = parseInput(countArg);
    const todoList = getNumberList(count, NumberType.EVEN);
    const todos = await TodoApi.getTodosParallel(todoList);

    // validate the response
    const validateResult = getListSchema.validate(todos);
    if (validateResult.error) {
      throw new Error(validateResult.error.message);
    }
    const todoDisplay: ITodoDisplay = new ConsoleTodoDisplay();
    todoDisplay.display(todos);
  } catch (error) {
    console.error(error);
  }
}
