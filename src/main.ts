import { createDatabase } from './infra/database/main';
import { createHttpServer } from "./infra/http_server/main";
import { messageBroker } from "./infra/message_broker/main";

export const database = createDatabase();
export const server = await createHttpServer();

await messageBroker.connect();


const { forexProsWorkerRunner } = await import('./app/worker/forex_pros_ws/main');
forexProsWorkerRunner.execute();