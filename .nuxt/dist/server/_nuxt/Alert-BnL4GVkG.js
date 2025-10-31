import __nuxt_component_0 from "./Icon-6AEq6jga.js";
import { f as flatUnwrap } from "./MDCSlot-9evsqLEJ.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderSlot as ssrRenderSlot$1, ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "../server.mjs";
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
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const ssrRenderSlot = (slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId) => {
  if (slots[name]) {
    return ssrRenderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props == null ? void 0 : props.unwrap) }, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
  }
  return ssrRenderSlot$1(slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: "heroicons-outline:exclamation"
    },
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "warning", "danger"].includes(value);
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["p-4 mt-4 mb-4 rounded-lg alert text-sm leading-relaxed", [__props.type]]
      }, _attrs))} data-v-f9a37643><div class="flex items-start" data-v-f9a37643>`);
      if (__props.icon) {
        _push(`<div${ssrRenderAttr("component", __props.icon)} class="inline-flex mr-2 w-5 h-5 justify-center items-center text-1.2rem" data-v-f9a37643>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "w-5 h-5 text-yellow-400",
          "aria-hidden": "true",
          name: "carbon:ai-status-complete"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot$1(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="flex-grow alert-content" data-v-f9a37643>`);
      ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p" }, () => {
        _push(`<template data-v-f9a37643><br data-v-f9a37643>`);
        ssrRenderSlot$1(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</template>`);
      }, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9a37643"]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=Alert-BnL4GVkG.js.map
