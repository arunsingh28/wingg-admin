import { DefineRoutesFunction } from "@remix-run/dev/dist/config/routes";

import { routes } from "./routes";

export const configureRoutes = (defineRoutes: DefineRoutesFunction) => {
  return defineRoutes((route) => {
    route(routes.DASHBOARD.INDEX, "pages/home/index.tsx");
    route(routes.DASHBOARD.PERMISSIONS, "pages/permission/index.tsx");
    route(routes.DASHBOARD.EMAIL_TEMPLATES, "pages/email-templates/index.tsx");
    route(routes.DASHBOARD.USERS, "pages/users/index.tsx");
    // add more routes here...
  });
};
