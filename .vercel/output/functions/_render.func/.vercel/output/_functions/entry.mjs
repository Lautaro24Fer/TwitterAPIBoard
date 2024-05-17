import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D-MN40Rt.mjs';
import * as serverEntrypointModule from '@astrojs/vercel/serverless/entrypoint';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BlZtKPN1.mjs');
const _page1 = () => import('./chunks/_id__BZjuYV_c.mjs');
const _page2 = () => import('./chunks/index_B6MWexRR.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "298eaa4e-abba-4445-ae9f-d4ff005d7ffa",
    "skewProtection": false
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
