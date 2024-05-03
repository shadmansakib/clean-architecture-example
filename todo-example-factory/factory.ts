import { StdOut, TodoService } from './interfaces';
import { SQLTodoService } from './sqlTodoService';
import { DynamoDBTodoService } from './ddbTodoService';
import { ConsoleLogger } from './logger';

export interface Factory<T> {
    getNewObject(objectType: string): T;
}

export class TodoServiceFactory implements Factory<TodoService> {
    getNewObject(objectType: string): TodoService {
        if (objectType === 'sql') {
            return new SQLTodoService();
        } else if (objectType === 'dynamodb') {
            return new DynamoDBTodoService();
        }
        throw new Error(`Not implemented for ${objectType} in TodoServiceFactory`);
    }
}

export class StandardOutputFactory implements Factory<StdOut> {
    getNewObject(objectType: string): StdOut {
        if (objectType === 'consoleLogger') {
            return new ConsoleLogger();
        }
        throw new Error(`Not implemented for ${objectType} in SquareNumberFactory`);
    }
}