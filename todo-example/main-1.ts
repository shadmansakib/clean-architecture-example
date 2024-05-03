import { Todo } from './interfaces';
import { queryTodosFromSQL } from './sqlTodos';


export async function main() {
    const todoList: Todo[] = await queryTodosFromSQL();
    console.log('Todo list:');
    console.log(todoList);
}

main();
