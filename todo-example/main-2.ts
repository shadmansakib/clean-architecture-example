import { Todo } from './interfaces';
import { queryTodosFromSQL } from './sqlTodos';
import { queryTodosFromDynamoDB } from './ddbTodos';


export async function main() {
    let todoList: Todo[];
    const dataSource = 'sql'; // dynamodb

    // if (dataSource === 'sql') {
    //     todoList = await queryTodosFromSQL();
    // } else if (dataSource === 'dynamodb') {
    //     todoList = await queryTodosFromDynamoDB();
    // } else {
    //     throw new Error(`Unsupported data source: ${dataSource}`);
    // }

    switch (dataSource) {
        case 'sql':
            todoList = await queryTodosFromSQL();
            break;
        case 'dynamodb':
            todoList = await queryTodosFromDynamoDB();
            break;
        default:
            throw new Error(`Unsupported data source: ${dataSource}`);
    }

    console.log('Todo list:');
    console.log(todoList);
}

main();
