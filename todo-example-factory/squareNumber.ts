export interface SquareNumber {
    getSquaredNumber(input: number): number;
}

export class SquareNumberImpl implements SquareNumber {
    getSquaredNumber(input: number): number {
        return input ** 2;
    }
}
