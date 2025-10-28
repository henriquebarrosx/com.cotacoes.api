import { quotes } from "../../worker/forex_pros_ws/data";
import type { CreateQuoteDTO } from "../../dto/quote/create_quote.dto";
import type { RawQuoteDTO } from "../../dto/quote/raw_quote.dto";

export function mapRawToQuote(rawQuote: RawQuoteDTO): CreateQuoteDTO {
    const quote = quotes.find(({ pid }) => pid === rawQuote.pid);
    if (!quote) throw new Error('Cannot parse raw to quote: pid not found')

    return {
        ...rawQuote,
        name: quote.origem,
        category: quote.category,
        symbol: quote.sigla,
        position: quote.position,
    }
}