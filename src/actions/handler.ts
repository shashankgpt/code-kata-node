import { getTodos } from "../request";
import { getListSchema } from "../schema";
import { getEvenNumber, displayTodos } from "../util";
import { parseInput } from "./bll";

export async function handleGetTodoCommand(countArg: any, options: any) {
  try {
    if (!options.even) {
      throw new Error("Option --even is required");
    }
    console.log(`Fetching even todo list...`);
    let count = parseInput(countArg);
    const todoList = getEvenNumber(count);
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
