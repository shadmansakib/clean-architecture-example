import { DynamoDB } from 'aws-sdk';
import { Todo, TodoService } from './interfaces';

/*
DDB schema:

{
    "TableName": "Todos",
    "KeySchema": [
        {"AttributeName": "id", "KeyType": "HASH"}
    ],
    "AttributeDefinitions": [
        {"AttributeName": "id", "AttributeType": "S"}
    ]
}
*/

export class DynamoDBTodoService implements TodoService {
    private client: DynamoDB.DocumentClient;

    constructor() {
        const region = 'eu-north-1';
        this.client = new DynamoDB.DocumentClient({
            region,
        });
    }

    async queryTodos(): Promise<Todo[]> {
        const params = {
            TableName: 'Todos'
        };

        const result = await this.client.scan(params).promise();
        return result.Items as Todo[];
    }
}