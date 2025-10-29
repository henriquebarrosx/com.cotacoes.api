import { logger } from '../logger/main';

export async function createHttpServer() {
    const { router } = await import('../router/main');

    const server = Bun.serve(
        {
            port: 3002,
            routes: router,
            fetch: () => new Response(null, { status: 404 })
        }
    )

    logger.info('[HttpServer] Server running at port 3002')

    return server;
}
