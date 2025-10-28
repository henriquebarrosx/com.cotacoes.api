import type { quotesHistoryTable } from "../../../db/schema";

export type QuoteHistory = typeof quotesHistoryTable.$inferSelect;