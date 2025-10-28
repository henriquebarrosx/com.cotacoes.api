import { eq, sql } from "drizzle-orm";
import { quotesHistoryTable } from "../../../db/schema";
import type { QuoteHistory } from "../../domain/entity/quote_history";
import type { Database, InMemoryDatabase } from "../../../infra/database/database";
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

    async function findByPid(pid: string): Promise<QuoteHistory | null> {
        const [result] = await database
            .select()
            .from(quotesHistoryTable)
            .where(eq(quotesHistoryTable.pid, pid))
            .limit(1)

        return result ?? null;
    }

    return {
        saveAll,
        findByPid,
    }
}

type QuoteHistoryRepositoryArgs = {
    providers: {
        database: Database | InMemoryDatabase;
    }
}

export type QuoteHistoryRepository = {
    saveAll(quotes: CreateQuoteHistoryDTO[]): Promise<void>;
    findByPid(pid: string): Promise<QuoteHistory | null>;
}