import type { Pool } from 'pg';
import { pushSchema } from 'drizzle-kit/api';
import { PGlite } from '@electric-sql/pglite';
import { PgliteDatabase, drizzle as PgLiteDrizzle } from 'drizzle-orm/pglite';
import { drizzle as PgDrizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';

import { logger } from '../logger/main';
import * as schemas from '../../db/schema';

export function createDatabase(): Database {
    logger.info('[DatabaseConnection] Establishing database connection')

    const databaseURL = process.env.DATABASE_URL;
    if (!databaseURL) throw new Error('Cannot establish database connection: url not defined');

    const database = PgDrizzle(
        {
            connection: {
                connectionString: databaseURL,
                ssl: false,
            }
        }
    );

    logger.info('[DatabaseConnection] Database connection established');
    return database;
}

export async function createInMemoryDatabase(): Promise<InMemoryDatabase> {
    const postgresClient = new PGlite();
    const database = PgLiteDrizzle({ client: postgresClient });

    await applyMigrations(database);

    return database;
}

async function applyMigrations(database: InMemoryDatabase) {
    const { apply } = await pushSchema(schemas, database);
    await apply();
}

export type Database = NodePgDatabase<Record<string, never>> & { $client: Pool; }
export type InMemoryDatabase = PgliteDatabase<Record<string, never>> & { $client: PGlite; }
