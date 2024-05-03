import logOutput from './logOutput';
import getSquaredNumber from './getSquaredNumber';

export function main() {
    const input: number = 10;
    const squaredNumber: number = getSquaredNumber(input);
    logOutput(squaredNumber);
}


main();
