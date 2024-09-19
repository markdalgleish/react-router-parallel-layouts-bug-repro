import type { RouteConfig } from "@react-router/dev/routes";
import { route, layout } from "@react-router/dev/routes";

export const routes: RouteConfig = [
  layout("routes/_wrapper1.tsx", [
    route("/hello", "./routes/_wrapper1.hello.tsx"),
  ]),
  layout("routes/_wrapper2.tsx", [
    route("/world", "./routes/_wrapper2.world.tsx"),
  ]),
];
