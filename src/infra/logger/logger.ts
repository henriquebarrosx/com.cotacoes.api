import Pino from 'pino';
import { threadId } from "worker_threads";

export function createLogger(): Logger {
    const logger = Pino(
        {
            transport: {
                target: 'pino-pretty',
                options: {
                    translateTime: 'SYS:dd/mm/yyyy HH:MM:ss',
                    colorize: true,
                }
            },
        },
    )

    function info(message: string, ...args: unknown[]): void {
        logger.info(`[Thread: ${threadId}] - ${message}`);
    }

    function error(message: string, ...args: unknown[]): void {
        logger.error(`[Thread: ${threadId}] - ${message}`);
    }

    return {
        info,
        error,
    }

}

export type Logger = {
    info(message: string, ...args: unknown[]): void;
    error(message: string, ...args: unknown[]): void;
}