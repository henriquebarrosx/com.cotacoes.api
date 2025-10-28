import { logger } from "../../../infra/logger/main";
import { quoteHistoryRepository } from "../../repository/quote_history/main";
import { createQuoteHistoryService } from "./quote_history.service";

export const quoteHistoryService = createQuoteHistoryService(
    {
        providers: {
            logger: logger,
            quoteHistoryRepository: quoteHistoryRepository,
        }
    }
)