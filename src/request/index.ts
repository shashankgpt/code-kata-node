import { Todo } from "../type";

const URL = 'https://jsonplaceholder.typicode.com/todos';

export async function getTodos(todos: number[]): Promise<Todo[]> {
    return await Promise.all(todos.map((id) => fetch(`${URL}/${id}`)))
        .then(responses => Promise.all(responses.map(response => response.json())))
}