import { SquareNumber, SquareNumberImpl } from './squareNumber';
import { Logger, ConsoleLogger } from './logger';

export interface Factory<T> {
    getNewObject(objectType: string): T;
}

export class SquareNumberFactory implements Factory<SquareNumber> {
    getNewObject(objectType: string): SquareNumber {
        if (objectType === 'squareNumber') {
            return new SquareNumberImpl();
        }
        throw new Error(`Not implemented for ${objectType} in SquareNumberFactory`);
    }
}

export class LoggerFactory implements Factory<Logger> {
    getNewObject(objectType: string): Logger {
        if (objectType === 'consoleLogger') {
            return new ConsoleLogger();
        }
        throw new Error(`Not implemented for ${objectType} in SquareNumberFactory`);
    }
}
