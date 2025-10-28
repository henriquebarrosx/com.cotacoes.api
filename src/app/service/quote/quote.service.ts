import { mapRawToQuote } from "../../mapper/quote/quote.mapper";

import type { Logger } from "../../../infra/logger/logger";
import type { RawQuoteDTO } from "../../dto/quote/raw_quote.dto";
import type { QuoteRepository } from "../../repository/quote/quote.repository";
import type { QuoteHistoryService } from "../quote_history/quote_history.service";

export function createQuoteService({ providers }: QuoteServiceArgs): QuoteService {
    const { logger, quoteRepository, quoteHistoryService } = providers;

    async function insertInBatch(rawQuotes: RawQuoteDTO[]): Promise<void> {
        logger.info(`[QuoteService] Processing batch insert for ${rawQuotes.length} quotes`);

        const incomingQuotes = rawQuotes.map((raw) => mapRawToQuote(raw));
        await quoteRepository.saveAll(incomingQuotes);

        logger.info(`[QuoteService] Inserted ${rawQuotes.length} quotes successfully`);

        await quoteHistoryService.insertInBatch(rawQuotes);
    }

    return {
        insertInBatch,
    }
}

type QuoteServiceArgs = {
    providers: {
        logger: Logger;
        quoteRepository: QuoteRepository;
        quoteHistoryService: QuoteHistoryService;
    }
}

export type QuoteService = {
    insertInBatch(rawQuotes: RawQuoteDTO[]): Promise<void>;
}