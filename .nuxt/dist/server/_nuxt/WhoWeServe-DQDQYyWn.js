import __nuxt_component_0 from "./Icon-6AEq6jga.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-DuPix_nQ.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WhoWeServe",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = ref([
      {
        title: "Employers & Group Plans",
        description: "Design competitive benefits, control costs, and protect your business.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        alt: "Businesses",
        backTitle: "Popular Employer Resources",
        backItems: [
          "Benefits Enrollment Guide",
          "Compliance Checklist (ACA, ERISA)",
          "Workers’ Comp Basics"
        ],
        backLinks: [
          "/employers/benefits-enrollment",
          "/employers/compliance-checklist",
          "/employers/workers-comp"
        ],
        learnMoreLink: "/businesses",
        getQuoteLink: "/info"
      },
      {
        title: "Individuals & Families",
        description: "Protect what matters with clear, affordable coverage.",
        image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        alt: "Families",
        backTitle: "Helpful Guides",
        backItems: [
          "Home & Auto Bundling Savings",
          "How Much Life Insurance Do I Need?",
          "Health Plan Basics"
        ],
        backLinks: [
          "/families/life-health",
          "/families/property-coverage",
          "/families/college-savings",
          "/families/emergency-support"
        ],
        learnMoreLink: "/families",
        getQuoteLink: "/info"
      },
      {
        title: "Seniors & Medicare",
        description: "Navigate Medicare with confidence and complete your retirement plan.",
        image: "https://images.unsplash.com/photo-1628891892235-5d834f9c64c1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        alt: "Seniors",
        backTitle: "Medicare Resources",
        backItems: [
          "Medicare 101",
          "Medigap vs. Advantage",
          "Enrollment Dates & Deadlines"
        ],
        backLinks: [
          "/seniors/medicare-advantage",
          "/seniors/retirement-planning",
          "/seniors/prescriptions",
          "/seniors/long-term-care"
        ],
        learnMoreLink: "/seniors",
        getQuoteLink: "/info"
      }
    ]);
    const flipped = ref(cards.value.map(() => false));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-white" }, _attrs))} data-v-12e571cd><div class="container mx-auto px-4" data-v-12e571cd><h2 class="text-3xl md:text-4xl font-bold text-center mb-12" data-v-12e571cd> Who We Serve </h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6 perspective" data-v-12e571cd><!--[-->`);
      ssrRenderList(cards.value, (card, i) => {
        _push(`<div class="relative h-80 w-full group" data-v-12e571cd><button class="absolute top-2 right-2 z-30 bg-black/50 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 hover:bg-black/60" data-v-12e571cd>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:swap-horizontal",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</button><div class="${ssrRenderClass([{ "rotate-y-180": flipped.value[i] }, "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"])}" data-v-12e571cd><div class="absolute inset-0 rounded-lg shadow-md overflow-hidden backface-hidden" data-v-12e571cd><img${ssrRenderAttr("src", card.image)}${ssrRenderAttr("alt", card.alt)} class="w-full h-full object-cover" data-v-12e571cd><div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white" data-v-12e571cd><h3 class="text-xl font-bold mb-2" data-v-12e571cd>${ssrInterpolate(card.title)}</h3><p class="text-sm text-white/90 mb-4" data-v-12e571cd>${ssrInterpolate(card.description)}</p><div class="flex gap-2" data-v-12e571cd>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: card.learnMoreLink,
          class: "bg-primary px-3 py-1 text-sm rounded-md hover:bg-primary/80 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Learn More `);
            } else {
              return [
                createTextVNode(" Learn More ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: card.getQuoteLink,
          class: "bg-white text-black px-3 py-1 text-sm rounded-md hover:bg-gray-200 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Get Quote `);
            } else {
              return [
                createTextVNode(" Get Quote ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div><div class="absolute inset-0 rounded-lg shadow-md bg-[#30BCFE] text-white p-6 flex flex-col justify-center transform rotate-y-180 backface-hidden" data-v-12e571cd><h3 class="text-lg font-bold mb-4" data-v-12e571cd>${ssrInterpolate(card.backTitle)}</h3><ul class="space-y-2 text-left mx-auto max-w-xs" data-v-12e571cd><!--[-->`);
        ssrRenderList(card.backItems, (item, j) => {
          _push(`<li class="flex items-center text-sm" data-v-12e571cd><span class="w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0" data-v-12e571cd></span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: card.backLinks[j],
            class: "underline hover:text-gray-200"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HomePage/WhoWeServe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-12e571cd"]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=WhoWeServe-DQDQYyWn.js.map
