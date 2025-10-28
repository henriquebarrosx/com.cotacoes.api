export type Router = Record<string, StaticRoute | DynamicRoute | Partial<HttpBaseRoute>>;

type StaticRoute = Response | Bun.HTMLBundle;

type DynamicRoute = (req: Bun.BunRequest) => (Response | Promise<Response>);

type HttpBaseRoute = {
    GET: (req: Bun.BunRequest) => Response | Promise<Response>;
    POSTS: (req: Bun.BunRequest) => Response | Promise<Response>;
    PUT: (req: Bun.BunRequest) => Response | Promise<Response>;
    DELETE: (req: Bun.BunRequest) => Response | Promise<Response>;
};

export type HttpRequest = Bun.BunRequest