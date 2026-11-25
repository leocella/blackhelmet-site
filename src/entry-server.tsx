import { renderToString } from "react-dom/server";
import { App } from "./App";

export { getRoutes, renderHead, NOT_FOUND_ROUTE, SITE_URL } from "./seo/routes";

export const render = (path: string) => renderToString(<App path={path} />);
export { buildLlms } from "./seo/llms";
