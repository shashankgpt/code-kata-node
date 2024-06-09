import { getTodos } from "../request";
import { getListSchema } from "../schema";
import { getEvenNumber } from "../util";

export function handleGetTodoCommand(countArg: any) {
    try {
    const count = countArg && Number.parseInt(countArg) ? Number(countArg) : 20;
    const todoList = getEvenNumber(count);
   getTodos(todoList).then((todos) => {
    const validateResult = getListSchema.validate(todos);
        if (validateResult.error) {
            throw new Error(validateResult.error.message);
        }
        todos.forEach(({ id, title, completed }) => {
            console.log(`Id:${id} ${completed ? '[x]' : '[ ]'} - ${title}`);
        });
    });
} catch (error) {
    console.log(error);
}
}