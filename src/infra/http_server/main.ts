import { router } from "../router/main";
import { logger } from "../logger/main";

export function createHttpServer() {
    Bun.serve(
        {
            port: 3002,
            routes: router,
            fetch: () => new Response(null, { status: 404 })
        }
    )

    logger.info('[HttpServer] Server running at port 3002')
}
