import type { RawQuoteDTO } from "./raw_quote.dto";

export type CreateQuoteDTO = RawQuoteDTO & {
    name: string;
    category: string;
    symbol: string;
    position: number;
};