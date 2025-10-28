import { setTimeout } from 'node:timers/promises';

import type { WorkerRunner } from '../runner';
import type { Logger } from '../../../infra/logger/logger';
import type { RawQuoteDTO } from '../../dto/quote/raw_quote.dto';
import type { QuoteProcessorBatchService } from '../../service/quote_processor_batch/quote_processor_batch.service';

export function createForexProsWorkerRunner({ providers }: ForexProsWorkerRunnerArgs): WorkerRunner {
    const { logger, quoteProcessorBatchService } = providers;

    function execute(): void {
        const workerURL = new URL('./worker.ts', import.meta.url)
        const worker = new Worker(workerURL, { ref: true, smol: true });

        worker.onmessage = event => {
            const quote: RawQuoteDTO = event.data;
            quoteProcessorBatchService.add(quote);
        };

        worker.onerror = async error => {
            logger.error("[ForexProsWorkerRunner] Worker failed to execute:", error);

            await setTimeout(15_000);
            execute();

            worker.terminate();
            worker.unref();
        };
    }

    return {
        execute,
    }
}


type ForexProsWorkerRunnerArgs = {
    providers: {
        logger: Logger;
        quoteProcessorBatchService: QuoteProcessorBatchService;
    }
}