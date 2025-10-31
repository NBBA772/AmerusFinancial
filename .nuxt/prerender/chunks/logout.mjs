import { eventHandler, deleteCookie } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/h3/dist/index.mjs';

const logout = eventHandler((event) => {
  deleteCookie(event, "auth_token");
  return "successfully logged out";
});

export { logout as default };
//# sourceMappingURL=logout.mjs.map
