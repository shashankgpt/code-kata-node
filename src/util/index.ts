import { Todo } from "../type";

export function getEvenNumber(count: number): number[] {
    if (!count) return [];
    const even20 = [];
    for (let i = 1; i <= count; i++) {
        even20.push(i * 2);
    }
    return even20;
}

export function displayTodos(todos: Todo[]): void {
    if (!todos.length) {
        console.log("No todos found");
    }
    todos.forEach(({ id, title, completed }) => {
        console.log(`Id:${id} ${completed ? "[x]" : "[ ]"} - ${title}`);
    });
}