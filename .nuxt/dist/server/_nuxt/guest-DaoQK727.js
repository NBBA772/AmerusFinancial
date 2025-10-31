import { p as defineNuxtRouteMiddleware, q as executeAsync, m as useUser } from "../server.mjs";
import "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
import "radix3";
import "vue/server-renderer";
import "cookie-es";
import "ohash";
const guest = defineNuxtRouteMiddleware(async (to) => {
  let __temp, __restore;
  const user = ([__temp, __restore] = executeAsync(() => useUser()), __temp = await __temp, __restore(), __temp);
  if (user !== null && user !== void 0) {
    return "/";
  }
});
export {
  guest as default
};
//# sourceMappingURL=guest-DaoQK727.js.map
