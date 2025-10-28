import { integer, pgTable, varchar, timestamp, decimal, date, foreignKey, unique, bigint } from "drizzle-orm/pg-core";

export const quotesTable = pgTable("quotes", {
    id: bigint({ mode: 'bigint' }).primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    symbol: varchar({ length: 255 }).notNull(),
    ask: varchar({ length: 255 }).notNull(),
    pid: varchar({ length: 255 }).notNull().unique(),
    bid: varchar({ length: 255 }).notNull(),
    high: varchar({ length: 255 }).notNull(),
    last: varchar({ length: 255 }).notNull(),
    last_dir: varchar({ length: 255 }).notNull(),
    last_numeric: decimal().notNull(),
    last_close: varchar({ length: 255 }),
    turnover: varchar({ length: 255 }),
    turnover_numeric: decimal(),
    low: varchar({ length: 255 }).notNull(),
    pc: varchar({ length: 255 }).notNull(),
    pc_col: varchar({ length: 255 }).notNull(),
    pcp: varchar({ length: 255 }).notNull(),
    time: varchar({ length: 255 }).notNull(),
    timestamp: bigint({ mode: 'bigint' }).notNull(),
    position: integer().notNull().default(0),
    category: varchar({ length: 50 }).notNull(),
    created_at: timestamp().defaultNow().notNull(),
    updated_at: timestamp().defaultNow().notNull(),
});

export const quotesHistoryTable = pgTable(
    "quote_histories",
    {
        id: bigint({ mode: 'bigint' }).primaryKey().generatedAlwaysAsIdentity(),
        pid: varchar({ length: 255 }).notNull().unique(),
        day: date().defaultNow().notNull(),
        high: varchar({ length: 255 }).notNull(),
        last: varchar({ length: 255 }).notNull(),
        low: varchar({ length: 255 }).notNull(),
        created_at: timestamp().defaultNow().notNull(),
        updated_at: timestamp().defaultNow().notNull(),
    },
    (table) => [
        unique().on(table.pid, table.day),
        foreignKey({
            columns: [table.pid],
            foreignColumns: [quotesTable.pid],
            name: "quote_pid_fkey",
        }),
    ]
);
