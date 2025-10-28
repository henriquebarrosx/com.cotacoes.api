
import type { Logger } from "../../../infra/logger/logger";
import type { RawQuoteDTO } from "../../dto/quote/raw_quote.dto";
import type { QuoteHistoryRepository } from "../../repository/quote_history/quote_history.repository";

export function createQuoteHistoryService({ providers }: QuoteHistoryServiceArgs): QuoteHistoryService {
    const { logger, quoteHistoryRepository } = providers;

    async function insertInBatch(rawQuotes: RawQuoteDTO[]): Promise<void> {
        logger.info(`[QuoteHistoryService] Processing batch insert for ${rawQuotes.length} quotes histories`);

        await quoteHistoryRepository.saveAll(rawQuotes);

        logger.info(`[QuoteHistoryService] Inserted ${rawQuotes.length} quotes histories successfully`);
    }

    return {
        insertInBatch,
    }
}

type QuoteHistoryServiceArgs = {
    providers: {
        logger: Logger;
        quoteHistoryRepository: QuoteHistoryRepository;
    }
}

export type QuoteHistoryService = {
    insertInBatch(rawQuotes: RawQuoteDTO[]): Promise<void>;
}