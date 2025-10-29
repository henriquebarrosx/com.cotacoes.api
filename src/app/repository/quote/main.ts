import { database } from "../../../main";
import { createQuoteRepository } from "./quote.repository";

export const quoteRepository = createQuoteRepository(
    {
        providers: {
            database: database,
        }
    }
)