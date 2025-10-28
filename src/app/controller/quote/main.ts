import { quoteService } from "../../service/quote/main";
import { createQuoteController } from "./quote.controller";

export const quoteController = createQuoteController(
    {
        providers: {
            quoteService: quoteService,
        }
    }
)