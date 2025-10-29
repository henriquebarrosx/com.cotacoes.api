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
        const extra = args.length ? ` ${args.join(' ')}` : '';
        logger.info(`[Thread: ${threadId}] - ${message}${extra}`);
    }

    function error(message: string, ...args: unknown[]): void {
        const extra = args.length ? ` ${args.join(' ')}` : '';
        logger.error(`[Thread: ${threadId}] - ${message}${extra}`);
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