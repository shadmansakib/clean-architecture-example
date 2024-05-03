import { TodoServiceFactory } from './factory';

export async function main() {
    const todoServiceFactory = new TodoServiceFactory();
    const todoService = todoServiceFactory.getNewObject('sql');
    console.log('Todo list:');
    console.log(await todoService.queryTodos());

}

main();
