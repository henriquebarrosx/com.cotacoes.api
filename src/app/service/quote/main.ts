import { logger } from "../../../infra/logger/main";
import { createQuoteService } from "./quote.service";
import { quoteRepository } from "../../repository/quote/main";
import { quoteHistoryService } from "../quote_history/main";

export const quoteService = createQuoteService(
    {
        providers: {
            logger: logger,
            quoteRepository: quoteRepository,
            quoteHistoryService: quoteHistoryService
        }
    }
)