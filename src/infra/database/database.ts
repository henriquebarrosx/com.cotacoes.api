import type { Pool } from 'pg';
import { pushSchema } from 'drizzle-kit/api';
import { PGlite } from '@electric-sql/pglite';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { PgliteDatabase, drizzle as PgLiteDrizzle } from 'drizzle-orm/pglite';

import { logger } from '../logger/main';
import * as schemas from '../../db/schema';

export function createDatabase(): Database {
    logger.info('[DatabaseConnection] Establishing database connection')

    const database = drizzle(
        {
            connection: {
                connectionString: process.env.DATABASE_URL,
                ssl: false,
            }
        }
    );

    logger.info('[DatabaseConnection] Database connection established')
    return database;
}

export async function createInMemoryDatabase(): Promise<InMemoryDatabase> {
    const postgresDB = new PGlite();
    const database: InMemoryDatabase = PgLiteDrizzle({ client: postgresDB });
    await applyMigrationsFromInMemoryDatabase(database);
    return database;
}

async function applyMigrationsFromInMemoryDatabase(database: InMemoryDatabase) {
    const { apply } = await pushSchema(schemas, database);
    await apply();
}

export type Database = NodePgDatabase<Record<string, never>> & { $client: Pool; }
export type InMemoryDatabase = PgliteDatabase<Record<string, never>> & { $client: PGlite; }
