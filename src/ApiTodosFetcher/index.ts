import { Todo } from "../type";

const URL = 'https://jsonplaceholder.typicode.com/todos';

export class ApiTodosFetcher {
    url: string;
    constructor(url: string) {
        this.url = url;
    }
    getTodosParallel(count: number[]): Promise<Todo[]> {
        return Promise.all(count.map((c) => fetch(`${this.url}/${c}`).then(res => res.json())));
    }   
}

// Singleton Design Pattern
export default new ApiTodosFetcher(URL)