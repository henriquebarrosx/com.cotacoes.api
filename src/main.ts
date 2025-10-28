import './infra/database/main';
import { createHttpServer } from "./infra/http_server/main";
import { messageBroker } from "./infra/message_broker/main";
import { forexProsWorkerRunner } from "./app/worker/forex_pros_ws/main";

/* CORE SERVICES */
await messageBroker.connect();
createHttpServer();

/* WORKERS */
forexProsWorkerRunner.execute();