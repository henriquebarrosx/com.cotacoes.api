import { quoteController } from "../../app/controller/quote/main";
import type { Router } from "./router";

/**
 * See the docs:
 * https://bun.com/docs/runtime/http/routing
 */
export const router: Router = {
    '/quotes': {
        GET: quoteController.getAllGroupedByCategory,
    }
}