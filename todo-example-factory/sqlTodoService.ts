import { Client } from 'pg';
import { Todo, TodoService } from './interfaces';

/*
SQL schema:

CREATE TABLE todos (
    id VARCHAR PRIMARY KEY,
    title VARCHAR,
    completed BOOLEAN
)
*/

export class SQLTodoService implements TodoService {
    private client: Client;

    constructor() {
        const connectionString = 'postgres://user:password@localhost:5432/mydb';
        this.client = new Client({
            connectionString,
        });

        this.client.connect();
    }

    async queryTodos(): Promise<Todo[]> {
        const query = 'SELECT id, title, completed FROM todos';
        const result = await this.client.query(query);
        return result.rows as Todo[];
    }
}
