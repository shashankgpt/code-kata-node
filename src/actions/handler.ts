import { getTodos } from "../request";
import { getFirstTwentyEvenNumbers } from "../util";

export function handleGetTodoFirstEven20Command() {
    const todoList = getFirstTwentyEvenNumbers();
    getTodos(todoList).then((todos) => {
        console.log(todos);
    });
}