import _sfc_main$1 from "./PlanningToolsCard-CYiX5sIg.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "./Icon-6AEq6jga.js";
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
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsurancePlanningTools",
  __ssrInlineRender: true,
  setup(__props) {
    const tools = [
      {
        title: "Retirement Calculator",
        description: "Plan for your future by calculating how much you need to save for a comfortable retirement.",
        icon: "lucide:calculator",
        link: "/retirement",
        button: "Calculate Now"
      },
      {
        title: "Health Insurance Glossary",
        description: "Access our comprehensive glossary of health insurance terms and definitions.",
        icon: "lucide:book-open",
        link: "/health-insurance-glossary",
        button: "View Glossary"
      },
      {
        title: "Insurance Guides",
        description: "Download helpful guides about Medicare, life insurance, and other coverage options.",
        icon: "lucide:file-text",
        link: "/resources",
        button: "Browse Guides"
      },
      {
        title: "Expert Consultation",
        description: "Get personalized advice from our insurance specialists to find the right coverage.",
        icon: "lucide:phone",
        link: "/contact",
        button: "Contact Us"
      },
      {
        title: "Medicare Planning",
        description: "Understand Medicare enrollment periods and find the right coverage for your needs.",
        icon: "lucide:heart-pulse",
        link: "/services/health/medicare",
        button: "Learn More"
      },
      {
        title: "Insurance Assessment",
        description: "Take our assessment to identify gaps in your current insurance coverage.",
        icon: "lucide:clipboard",
        link: "/contact",
        button: "Start Assessment"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PlanningToolsCard = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-gray-50" }, _attrs))}><div class="container mx-auto px-4"><div class="text-center mb-12"><h2 class="text-3xl font-bold mb-4">Insurance Planning Tools</h2><p class="text-gray-600 max-w-2xl mx-auto"> Access our suite of interactive calculators, personalized guidance tools, and expert resources to help make informed decisions about your insurance and financial future. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(tools, (tool, index) => {
        _push(ssrRenderComponent(_component_PlanningToolsCard, {
          key: index,
          title: tool.title,
          description: tool.description,
          icon: tool.icon,
          link: tool.link,
          "link-text": tool.button
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mt-12 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/resources" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-colors"${_scopeId}> View All Resources </button>`);
          } else {
            return [
              createVNode("button", { class: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-colors" }, " View All Resources ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HomePage/InsurancePlanningTools.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=InsurancePlanningTools-rnvuyXug.js.map
