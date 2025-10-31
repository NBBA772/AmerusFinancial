import { h as useRoute } from "../server.mjs";
import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "success",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const sessionId = ref(route.query.session_id ? route.query.session_id : "");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(sessionId)) {
        _push(`<div class="flex py-60 flex-col h-screen my-auto items-center bgimg bg-cover"><button class="mt-2 bg-white font-bold py-1 px-8 rounded m-2 dark:bg-black dark:text-white"> You are subscribed! </button><form action="/api/stripe/createPortalSession" method="POST"><input type="hidden" id="session-id" name="session_id"${ssrRenderAttr("value", unref(sessionId))}><button class="w-full px-6 py-3.5 text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" id="checkout-and-portal-button" type="submit"> Manage your subscription </button></form></div>`);
      } else {
        _push(`<div>loading. . .</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/subscribe/success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=success-_lGZUOZV.js.map
