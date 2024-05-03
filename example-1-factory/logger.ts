export interface Logger {
    logOutput(output: unknown): void;
}

export class ConsoleLogger implements Logger {
    logOutput(output: unknown): void {
        console.log(`LOG OUTPUT: ${output}`);
    }
}
