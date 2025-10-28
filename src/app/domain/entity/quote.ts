import type { quotesTable } from "../../../db/schema";

export type Quote = typeof quotesTable.$inferSelect;