import { TodoServiceFactory } from './factory';

export async function main() {
    const todoServiceFactory = new TodoServiceFactory();
    const todoService = todoServiceFactory.getNewObject('sql');
    const todoList = await todoService.queryTodos();
    console.log('Todo list:');
    console.log(todoList);
}

main();
