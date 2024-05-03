import { Client } from 'pg';
import { Todo } from './interfaces';

/*
CREATE TABLE todos (
    id VARCHAR PRIMARY KEY,
    title VARCHAR,
    completed BOOLEAN
)
*/
export async function queryTodosFromSQL(): Promise<Todo[]> {
    const client = new Client({
        connectionString: 'postgres://user:password@localhost:5432/mydb',
    });

    await client.connect();
    const query = 'SELECT id, title, completed FROM todos';
    const result = await client.query(query);
    await client.end();

    return result.rows as Todo[];
}
