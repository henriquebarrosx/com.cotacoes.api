import { quoteService } from "../quote/main";
import { createQuoteProcessorBatchService } from "./quote_processor_batch.service";

export const quoteProcessorBatchService = createQuoteProcessorBatchService(
    {
        providers: {
            quoteService: quoteService,
        }
    }
)