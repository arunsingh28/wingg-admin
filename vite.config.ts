import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cjsInterop } from "vite-plugin-cjs-interop";

import { configureRoutes } from "./app/router/routes.config";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      routes: configureRoutes,
    }),
    tsconfigPaths(),
    cjsInterop({
      dependencies: ["@emotion/*"],
    }),
  ],
  resolve: {
    alias: {},
  },
  ssr: {},
  server: {
    hmr: {
      overlay: false,
    },
    port: 3001
  },
});
