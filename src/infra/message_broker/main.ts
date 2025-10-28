import { logger } from "../logger/main.ts";
import { createRabbitMQFacade } from "./rabbitmq_facade/rabbitmq_facade.ts";

export const messageBroker = createRabbitMQFacade(
    {
        providers: {
            logger: logger
        }
    }
)
