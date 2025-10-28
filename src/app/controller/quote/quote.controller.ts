import type { HttpRequest } from "../../../infra/router/router";
import type { QuoteService } from "../../service/quote/quote.service";

export function createQuoteController({ providers }: QuoteControllerArgs): QuoteController {
    const { quoteService } = providers;

    async function getAllGroupedByCategory(_request: HttpRequest): Promise<Response> {
        const quotes = await quoteService.getAllGroupedByCategory();
        return Response.json(quotes, { status: 200 });
    }

    return {
        getAllGroupedByCategory,
    }
}

type QuoteControllerArgs = {
    providers: {
        quoteService: QuoteService;
    }
}

export type QuoteController = {
    getAllGroupedByCategory(request: HttpRequest): Promise<Response>
}