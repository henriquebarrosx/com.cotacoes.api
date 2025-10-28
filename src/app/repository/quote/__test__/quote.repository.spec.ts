import { beforeEach, describe, expect, it } from 'bun:test';

import { baseQuote } from './quote.repository.spec.data';
import type { CreateQuoteDTO } from '../../../dto/quote/create_quote.dto';
import type { InMemoryDatabase } from '../../../../infra/database/database';
import { createInMemoryDatabase } from '../../../../infra/database/database';
import { createQuoteRepository, type QuoteRepository } from '../quote.repository';

describe('QuoteRepository', () => {
    let db: InMemoryDatabase;
    let repository: QuoteRepository;

    beforeEach(async () => {
        db = await createInMemoryDatabase();
        repository = createQuoteRepository({ providers: { database: db } });
    });

    it('should insert a row if it does not exist', async () => {
        const quote: CreateQuoteDTO = {
            ...baseQuote,
            last: "4,022.39",
            high: "4,033.96",
            low: "3,987.99",
        }

        await repository.saveAll([quote]);

        const storedQuote = await repository.findByPid(quote.pid);

        expect(storedQuote).not.toBeNull();
        expect(storedQuote!.pid).toBe(quote.pid)
        expect(storedQuote!.last).toBe(quote.last)
        expect(storedQuote!.high).toBe(quote.high)
        expect(storedQuote!.low).toBe(quote.low)
    })

    it('should update a row if it already exist', async () => {
        const existentQuote: CreateQuoteDTO = {
            ...baseQuote,
            pid: "8830",
            last: "4,022.39",
            high: "4,033.96",
            low: "3,987.99",
        }

        await repository.saveAll([existentQuote]);
        const quoteBeforeUpdate = (await repository.findByPid(existentQuote.pid))!;

        expect(quoteBeforeUpdate.last).toBe(existentQuote.last)
        expect(quoteBeforeUpdate.high).toBe(existentQuote.high)
        expect(quoteBeforeUpdate.low).toBe(existentQuote.low)

        const updatedQuote: CreateQuoteDTO = {
            ...baseQuote,
            pid: "8830",
            last: "2,022.39",
            high: "2,033.96",
            low: "1,987.99",
        }

        await repository.saveAll([updatedQuote]);
        const quoteAfterUpdate = (await repository.findByPid(existentQuote.pid))!;

        expect(quoteAfterUpdate.last).toBe(updatedQuote.last)
        expect(quoteAfterUpdate.high).toBe(updatedQuote.high)
        expect(quoteAfterUpdate.low).toBe(updatedQuote.low)
    })
});