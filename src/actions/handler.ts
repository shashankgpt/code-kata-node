import { getTodos } from "../request";
import { getListSchema } from "../schema";
import { getEvenNumber, displayTodos } from "../util";

export async function handleGetTodoCommand(countArg: any) {
  try {
    const count = countArg && Number.parseInt(countArg) ? Number(countArg) : 20;
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
