export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface StdOut {
    standardOutput(output: unknown): void;
}

export interface TodoService {
    queryTodos(): Promise<Todo[]>;
}
