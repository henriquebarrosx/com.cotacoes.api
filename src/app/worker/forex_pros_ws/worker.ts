import WebSocket from 'ws';

import { quotes } from './data';
import { logger } from "../../../infra/logger/main";
import type { RawQuoteDTO } from '../../dto/quote/raw_quote.dto';

const url = process.env.FOREX_WS_URL;
if (!url) throw new Error('Cannot connect websocket: url not found')

const SUBSCRIPTION_EVENT = 'subscribe';
const TIME_ZONE_ID = 12;

logger.info("[ForexPros Websocket Worker] Establishing connection");

const socket = new WebSocket(url);

socket.on('open', () => {
    logger.info("[ForexPros Websocket Worker] Connection established");
    const pids = getSubscriptionsPidEvent();
    pids.forEach((pid) => subscribe(pid));
});

socket.on('message', async (event) => {
    const message = getSerializedMessage(event);
    postMessage(message);
});

socket.on('error', async (error) => {
    logger.error('[ForexPros Websocket Worker] Failed establishing connection: ', error);
    process.exit(1);
});

socket.on('close', () => {
    logger.info("[ForexPros Websocket Worker] Connection has been closed");
    process.exit(1);
});

function subscribe(quote_pid: string): void {
    const payload = JSON.stringify(
        {
            _event: SUBSCRIPTION_EVENT,
            tzID: TIME_ZONE_ID,
            message: quote_pid,
        }
    )

    socket.send(payload);
}

function getSerializedMessage(event: WebSocket.RawData): RawQuoteDTO {
    const content = JSON.parse(event.toString('utf-8'));
    const serializedMsg = content.message.split('::');
    const serializedObj = JSON.parse(serializedMsg[1]);
    return serializedObj;
}

function getSubscriptionsPidEvent(): string[] {
    return quotes.map(quote => `pid-${quote.pid}:`);
}