import type { RawQuoteDTO } from "../../dto/quote/raw_quote.dto";
import type { QuoteService } from "../quote/quote.service";

export function createQuoteProcessorBatchService({ providers }: QuoteProcessorBatchServiceArgs): QuoteProcessorBatchService {
    const { quoteService } = providers;

    let queue = new Map();
    let isProcessing = false;

    function add(rawQuote: RawQuoteDTO): void {
        queue.set(rawQuote.pid, rawQuote);

        /* Logic to broadcast the event and save quote */

        if (isProcessing) return;
        scheduleBatchProcess();
    }

    function scheduleBatchProcess() {
        isProcessing = true;
        setTimeout(() => processBatchMessages(), 10_000);
    }

    async function processBatchMessages() {
        const messages = Array.from(queue.values());
        const hasMessagesToBeSaved = messages.length;

        queue = new Map();

        if (hasMessagesToBeSaved) {
            quoteService.insertInBatch(messages);
        }

        isProcessing = false;
    }

    return {
        add,
    }
}

export type QuoteProcessorBatchServiceArgs = {
    providers: {
        quoteService: QuoteService;
    }
}

export type QuoteProcessorBatchService = {
    add(rawQuote: RawQuoteDTO): void;
}
