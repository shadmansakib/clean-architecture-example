import { DynamoDB } from 'aws-sdk';
import { Todo } from './interfaces';
/*
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
export async function queryTodosFromDynamoDB(): Promise<Todo[]> {
    const region = 'eu-north-1';
    const dynamoDBClient = new DynamoDB.DocumentClient({
        region,
    });

    const params = {
        TableName: 'Todos',
    };

    const result = await dynamoDBClient.scan(params).promise();
    return result.Items as Todo[];
}