import { DefineRoutesFunction } from "@remix-run/dev/dist/config/routes";


export const configureRoutes = (defineRoutes: DefineRoutesFunction) => {
  return defineRoutes((route) => {
    route("/", "pages/home/index.tsx", { index: true });
    // add more routes here...
  });
};
