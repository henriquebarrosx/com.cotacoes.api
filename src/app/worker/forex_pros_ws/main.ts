import { logger } from "../../../infra/logger/main";
import { createForexProsWorkerRunner } from "./runner";
import { quoteProcessorBatchService } from "../../service/quote_processor_batch/main";

export const forexProsWorkerRunner = createForexProsWorkerRunner(
    {
        providers: {
            logger: logger,
            quoteProcessorBatchService: quoteProcessorBatchService,
        }
    }
)