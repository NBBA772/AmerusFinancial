import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import { _ as __nuxt_component_2 } from "./nuxt-img-CXQw38If.js";
import { withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "ufo";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "defu";
import "klona";
import "devalue";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
const _sfc_main = {
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    /** Required hero object for the component. Should include: { eyebrow, title, description, image, imageAlt, cta: { href, label } } */
    hero: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_2;
      _push(`<!--[--><div class="flex flex-col md:flex-row gap-8 items-center"><div class="flex-1 space-y-4"><div class="inline-flex items-center rounded-full border border-[#30BCFE]/50 px-2.5 py-0.5 text-xs font-semibold text-[#30BCFE] mb-2 bg-[#30BCFE]/5 backdrop-blur-sm">${ssrInterpolate(__props.hero.eyebrow)}</div><h1 class="text-3xl sm:text-4xl font-bold tracking-tight">${ssrInterpolate(__props.hero.title)}</h1><p class="text-lg text-muted-foreground">${ssrInterpolate(__props.hero.description)}</p><div class="pt-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: ((_a = __props.hero.cta) == null ? void 0 : _a.href) || "/contact",
        class: "inline-flex items-center justify-center gap-2 text-sm font-medium bg-[#30BCFE] text-white hover:bg-[#30BCFE]/90 h-11 rounded-md px-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = __props.hero.cta) == null ? void 0 : _a2.label) || "Contact")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b = __props.hero.cta) == null ? void 0 : _b.label) || "Contact"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex-1 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: __props.hero.image,
        alt: __props.hero.imageAlt || __props.hero.title,
        class: "w-full h-auto max-w-md rounded-xl object-cover shadow-sm",
        loading: "lazy",
        width: "448",
        height: "300"
      }, null, _parent));
      _push(`</div></div><div class="border-t border-gray-200 w-full my-4"></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Hero-DLw1-KdJ.js.map
