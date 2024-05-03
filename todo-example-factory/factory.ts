import { TodoService } from './interfaces';
import { SQLTodoService } from './sqlTodoService';
import { DynamoDBTodoService } from './ddbTodoService';

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
