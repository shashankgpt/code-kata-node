export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
}

export enum NumberType {
    EVEN = 'even',
    ODD = 'odd',
    ALL = 'all'
}

export interface ITodoDisplay {
    display(todos: Todo[]): void;
  }