import { Factory } from './factory';
import { StdOut, TodoService } from './interfaces';

export async function stdOutTodoList(todoServiceFactory: Factory<TodoService>, loggerFactory: Factory<StdOut>) {
    const todoService = todoServiceFactory.getNewObject('sql');
    const stdOut = loggerFactory.getNewObject('consoleLogger');
    const todoList = await todoService.queryTodos();
    stdOut.standardOutput('Todo list:');
    stdOut.standardOutput(todoList);
}