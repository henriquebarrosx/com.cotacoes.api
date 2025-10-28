import { sql } from "drizzle-orm";
import { quotesHistoryTable } from "../../../db/schema";
import type { Database } from "../../../infra/database/database";
import type { CreateQuoteHistoryDTO } from "../../dto/quote_history/create_quote_history.dto";

export function createQuoteHistoryRepository({ providers }: QuoteHistoryRepositoryArgs): QuoteHistoryRepository {
    const { database } = providers;


    async function saveAll(quotes: CreateQuoteHistoryDTO[]): Promise<void> {
        await database
            .insert(quotesHistoryTable)
            .values(quotes)
            .onConflictDoUpdate({
                target: quotesHistoryTable.pid,
                set: {
                    high: sql`EXCLUDED.high`,
                    last: sql`EXCLUDED.last`,
                    low: sql`EXCLUDED.low`,
                    updated_at: new Date(),
                }
            })
    }

    return {
        saveAll,
    }
}

type QuoteHistoryRepositoryArgs = {
    providers: {
        database: Database;
    }
}

export type QuoteHistoryRepository = {
    saveAll(quotes: CreateQuoteHistoryDTO[]): Promise<void>;
}