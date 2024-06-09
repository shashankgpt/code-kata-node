import { getTodos } from "../request";
import { getEvenNumber } from "../util";

export function handleGetTodoFirstEven20Command() {
    const todoList = getEvenNumber();
    getTodos(todoList).then((todos) => {
        todos.forEach(({ id, title, completed }) => {
            console.log(`${completed ? '✅' : '❌'} Id:${id} - ${title}`);
        });
    });
}