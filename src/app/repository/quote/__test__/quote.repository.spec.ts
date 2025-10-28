import { beforeEach, describe, expect, it } from 'bun:test';

import { baseQuote } from './quote.repository.spec.data';
import type { CreateQuoteDTO } from '../../../dto/quote/create_quote.dto';
import type { InMemoryDatabase } from '../../../../infra/database/database.ts';
import { createInMemoryDatabase } from '../../../../infra/database/database.ts';
import { createQuoteRepository, type QuoteRepository } from '../quote.repository.ts';

describe('QuoteRepository', () => {
    let db: InMemoryDatabase;
    let repository: QuoteRepository;

    beforeEach(async () => {
        db = await createInMemoryDatabase();
        repository = createQuoteRepository({ providers: { database: db } });
    });

    it('should insert a row if it does not exist', async () => {
        const quotePayload: CreateQuoteDTO = {
            ...baseQuote,
            last: "4,022.39",
            high: "4,033.96",
            low: "3,987.99",
        }

        await repository.saveAll([quotePayload]);

        const quote = (await repository.findByPid(quotePayload.pid))!;

        expect(quote).not.toBeNull();
        expect(quote.pid).toBe(quotePayload.pid)
        expect(quote.last).toBe(quotePayload.last)
        expect(quote.high).toBe(quotePayload.high)
        expect(quote.low).toBe(quotePayload.low)
    })

    it('should update a row if it already exist', async () => {
        const storedQuotePayload: CreateQuoteDTO = {
            ...baseQuote,
            pid: "8830",
            last: "4,022.39",
            high: "4,033.96",
            low: "3,987.99",
        }

        const updatedQuotePayload: CreateQuoteDTO = {
            ...baseQuote,
            pid: "8830",
            last: "2,022.39",
            high: "2,033.96",
            low: "1,987.99",
        }

        await repository.saveAll([storedQuotePayload]);
        await repository.saveAll([updatedQuotePayload]);

        const quote = (await repository.findByPid(storedQuotePayload.pid))!;

        expect(quote.last).toBe(updatedQuotePayload.last)
        expect(quote.high).toBe(updatedQuotePayload.high)
        expect(quote.low).toBe(updatedQuotePayload.low)
    })
});