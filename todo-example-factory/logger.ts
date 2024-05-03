import { StdOut } from "./interfaces";

export class ConsoleLogger implements StdOut {
    standardOutput(output: unknown): void {
        console.log(`LOG OUTPUT: ${output}`);
    }
}
