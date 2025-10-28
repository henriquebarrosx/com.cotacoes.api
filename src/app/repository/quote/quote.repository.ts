import { eq, sql } from "drizzle-orm";
import { quotesTable } from "../../../db/schema";
import type { Quote } from "../../domain/entity/quote";
import type { CreateQuoteDTO } from "../../dto/quote/create_quote.dto";
import type { Database, InMemoryDatabase } from "../../../infra/database/database";

export function createQuoteRepository({ providers }: QuoteRepositoryArgs): QuoteRepository {
    const { database } = providers;

    async function saveAll(quotes: CreateQuoteDTO[]): Promise<void> {
        const data = quotes.map((quote) => {
            return {
                ...quote,
                timestamp: BigInt(quote.timestamp),
                turnover_numeric: quote.turnover_numeric?.toString(),
            }
        })

        await database
            .insert(quotesTable)
            .values(data)
            .onConflictDoUpdate({
                target: quotesTable.pid,
                set: {
                    name: sql`EXCLUDED.name`,
                    ask: sql`EXCLUDED.ask`,
                    bid: sql`EXCLUDED.bid`,
                    high: sql`EXCLUDED.high`,
                    last: sql`EXCLUDED.last`,
                    last_dir: sql`EXCLUDED.last_dir`,
                    last_numeric: sql`EXCLUDED.last_numeric`,
                    low: sql`EXCLUDED.low`,
                    pc: sql`EXCLUDED.pc`,
                    pc_col: sql`EXCLUDED.pc_col`,
                    pcp: sql`EXCLUDED.pcp`,
                    time: sql`EXCLUDED.time`,
                    timestamp: sql`EXCLUDED.timestamp`,
                    position: sql`EXCLUDED.position`,
                    category: sql`EXCLUDED.category`,
                    updated_at: new Date()
                }
            })
    }

    async function findByPid(pid: string): Promise<Quote | null> {
        const [result] = await database
            .select()
            .from(quotesTable)
            .where(eq(quotesTable.pid, pid))
            .limit(1)

        return result ?? null;
    }

    return {
        findByPid,
        saveAll,
    }
}

type QuoteRepositoryArgs = {
    providers: {
        database: Database | InMemoryDatabase;
    }
}

export type QuoteRepository = {
    findByPid(pid: string): Promise<Quote | null>;
    saveAll(quotes: CreateQuoteDTO[]): Promise<void>;
}