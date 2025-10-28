import { database } from "../../../infra/database/main";
import { createQuoteHistoryRepository } from "./quote_history.repository";

export const quoteHistoryRepository = createQuoteHistoryRepository(
    {
        providers: {
            database: database,
        }
    }
)