import { getTodos } from "../request";
import { getListSchema } from "../schema";
import { getEvenNumber, displayTodos } from "../util";

const defaultCount = 20;
const maxCount = 100;

export async function handleGetTodoCommand(countArg: any) {
  try {
    // validate the input
    let count = defaultCount;
    if (
      countArg &&
      !Number.isNaN(Number(countArg)) &&
      Number(countArg) === Number.parseInt(countArg)
    ) {
      if (count > maxCount) {
        throw new Error(`Count should be less than ${maxCount}`);
      }
      count = Number.parseInt(countArg);
    } else {
      console.warn(`Invalid input. Using default count of ${count}\n`);
    }
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
