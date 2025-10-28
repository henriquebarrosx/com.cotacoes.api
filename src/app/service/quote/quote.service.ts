import { mapRawToQuote } from "../../mapper/quote/quote.mapper";

import type { QuoteDTO } from "../../dto/quote/quote.dto";
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

    async function getAllGroupedByCategory(): Promise<Partial<Record<string, QuoteDTO[]>>> {
        const quotes = await quoteRepository.findAll();
        const items = Object.groupBy(quotes, ({ category }) => category);
        return items;
    }

    return {
        getAllGroupedByCategory,
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
    getAllGroupedByCategory(): Promise<Partial<Record<string, QuoteDTO[]>>>;
    insertInBatch(rawQuotes: RawQuoteDTO[]): Promise<void>;
}