export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface TodoService {
    queryTodos(): Promise<Todo[]>;
}
