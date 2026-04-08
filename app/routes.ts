import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/Login.tsx"),
  route("dashboard", "pages/Dashboard.tsx"),
  route("profile", "pages/Profile.tsx"),
  route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;
