import { beforeEach, describe, expect, it } from 'bun:test';

import { baseQuote } from './quote.history.spec.data.ts';
import type { CreateQuoteDTO } from '../../../dto/quote/create_quote.dto.ts';
import type { InMemoryDatabase } from '../../../../infra/database/main.ts';
import { createInMemoryDatabase } from '../../../../infra/database/main.ts';
import { createQuoteRepository, type QuoteRepository } from '../../quote/quote.repository.ts';
import type { CreateQuoteHistoryDTO } from '../../../dto/quote_history/create_quote_history.dto.ts';
import { createQuoteHistoryRepository, type QuoteHistoryRepository } from '../quote_history.repository.ts';

describe('QuoteHistoryRepository', () => {
    let db: InMemoryDatabase;
    let quoteRepository: QuoteRepository;
    let quoteHistoryRepository: QuoteHistoryRepository;

    beforeEach(async () => {
        db = await createInMemoryDatabase();
        quoteRepository = createQuoteRepository({ providers: { database: db } });
        quoteHistoryRepository = createQuoteHistoryRepository({ providers: { database: db } });
    });

    it('should insert a row if it does not exist', async () => {
        const storedQuotePayload: CreateQuoteDTO = {
            ...baseQuote,
            pid: "8830",
            last: "4,022.39",
            high: "4,033.96",
            low: "3,987.99",
        }

        const historyPayload: CreateQuoteHistoryDTO = {
            pid: "8830",
            last: "4,022.39",
            high: "4,033.96",
            low: "3,987.99",
        }

        await quoteRepository.saveAll([storedQuotePayload]);
        await quoteHistoryRepository.saveAll([historyPayload]);

        const history = (await quoteHistoryRepository.findByPid(historyPayload.pid))!;

        expect(history).not.toBeNull();
        expect(history.pid).toBe(historyPayload.pid)
        expect(history.last).toBe(historyPayload.last)
        expect(history.high).toBe(historyPayload.high)
        expect(history.low).toBe(historyPayload.low)
    })

    it('should update a row if it already exist', async () => {
        const storedQuotePayload: CreateQuoteDTO = {
            ...baseQuote,
            pid: "8830",
            last: "4,022.39",
            high: "4,033.96",
            low: "3,987.99",
        }

        const storedHistoryPayload: CreateQuoteHistoryDTO = {
            pid: "8830",
            last: "4,022.39",
            high: "4,033.96",
            low: "3,987.99",
        }

        const updatedHistoryPayload: CreateQuoteHistoryDTO = {
            pid: "8830",
            last: "2,022.39",
            high: "2,033.96",
            low: "1,987.99",
        }

        await quoteRepository.saveAll([storedQuotePayload]);
        await quoteHistoryRepository.saveAll([storedHistoryPayload]);
        await quoteHistoryRepository.saveAll([updatedHistoryPayload]);

        const history = (await quoteHistoryRepository.findByPid(storedHistoryPayload.pid))!;

        expect(history).not.toBeNull();
        expect(history.last).toBe(updatedHistoryPayload.last)
        expect(history.high).toBe(updatedHistoryPayload.high)
        expect(history.low).toBe(updatedHistoryPayload.low)
    })
});