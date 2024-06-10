import { getTodos } from "../request";
import { getListSchema } from "../schema";
import { NumberType } from "../type";
import { getNumberList } from "../util";
import { parseInput, displayTodos } from "./bll";

export async function handleGetTodoCommand(countArg: any, options: any) {
  try {
    if (!options.even) {
      throw new Error("Option --even is required");
    }
    console.log(`Fetching even todo list...`);
    let count = parseInput(countArg);
    const todoList = getNumberList(count, NumberType.EVEN);
    const todos = await getTodos(todoList);

    // validate the response
    const validateResult = getListSchema.validate(todos);
    if (validateResult.error) {
      throw new Error(validateResult.error.message);
    }

    displayTodos(todos);
  } catch (error) {
    console.error(error);
  }
}
