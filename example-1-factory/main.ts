import { LoggerFactory, SquareNumberFactory } from './factory';

export function main() {
    const input: number = 10;

    // create instances of the factories
    const squareNumberFactory = new SquareNumberFactory();
    const loggerFactory = new LoggerFactory();

    // use the factory instances to create new objects
    const squareNumber = squareNumberFactory.getNewObject('squareNumber');
    const logger = loggerFactory.getNewObject('consoleLogger');

    const squared: number = squareNumber.getSquaredNumber(input);
    logger.logOutput(squared);
}

main();
