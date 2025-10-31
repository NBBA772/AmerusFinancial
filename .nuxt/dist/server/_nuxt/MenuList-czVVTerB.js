import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import __nuxt_component_0$1 from "./Icon-6AEq6jga.js";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "MenuList",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const services = [
      {
        label: "Overview",
        items: [
          { label: "All Services", href: "/services", active: false }
        ]
      },
      {
        label: "Health Insurance",
        items: [
          { label: "Individual Health", href: "/services/health/individual-health" },
          { label: "Family Coverage", href: "/services/health/family-coverage", active: true },
          { label: "Group Health", href: "/services/health/group-health" },
          { label: "Medicare", href: "/services/health/medicare" },
          { label: "Dental Coverage", href: "/services/health/dental" },
          { label: "Senior Dental", href: "/services/health/senior-dental" },
          { label: "Vision Coverage", href: "/services/health/vision-coverage" },
          { label: "Private Health", href: "/services/health/private-health" }
        ]
      },
      {
        label: "Life Insurance",
        items: [
          { label: "Life Insurance", href: "/services/life/life-insurance" },
          { label: "Term Life Insurance", href: "/services/life/term-life" },
          { label: "Whole Life Insurance", href: "/services/life/whole-life" },
          { label: "Universal Life", href: "/services/life/universal-life" },
          { label: "Final Expense", href: "/services/life/final-expense" },
          { label: "Key Person Insurance", href: "/services/life/key-person-insurance" },
          { label: "Group Life Insurance", href: "/services/life/group-life-insurance" },
          { label: "Split Dollar", href: "/services/life/split-dollar" }
        ]
      },
      {
        label: "Retirement Planning",
        items: [
          { label: "IRAs", href: "/services/retirement/iras" },
          { label: "401(k) Rollovers", href: "/services/retirement/401k" },
          { label: "Annuities", href: "/services/retirement/annuity" },
          { label: "Pension Planning", href: "/services/retirement/pension-planning" },
          { label: "Long Term Care", href: "/services/retirement/long-term-care" },
          { label: "Retirement Income", href: "/services/retirement/retirement-income" }
        ]
      },
      {
        label: "Auto Insurance",
        items: [
          { label: "Auto Insurance Overview", href: "/services/auto" },
          { label: "Personal Auto", href: "/services/auto/personal-auto" },
          { label: "Uninsured Motorist", href: "/services/auto/uninsured-motorist" },
          { label: "Multi Vehicle", href: "/services/auto/multi-vehicle" },
          { label: "Commercial Auto", href: "/services/auto/commercial-auto" },
          { label: "Comprehensive Coverage", href: "/services/auto/comprehensive-coverage" },
          { label: "Personal Injury Protection", href: "/services/auto/personal-injury-protection" }
        ]
      },
      {
        label: "Home Insurance",
        items: [
          { label: "Homeowners Insurance", href: "/services/home/homeowners" },
          { label: "Property Protection", href: "/services/home/property-protection" },
          { label: "Additional Living Expenses", href: "/services/home/living-expenses" },
          { label: "Valuable Items Coverage", href: "/services/home/valuable-items" },
          { label: "Property Coverage", href: "/services/home/property-coverage" },
          { label: "liability Coverage", href: "/services/home/liability-coverage" },
          { label: "Flood Insurance", href: "/services/home/flood-insurance" }
        ]
      },
      {
        label: "Business Insurance",
        items: [
          { label: "General Liability", href: "/services/business/general-liability" },
          { label: "Professional Liability", href: "/services/business/professional-liability" },
          { label: "Workers Comp", href: "/services/business/workers-comp" },
          { label: "Commercial Property", href: "/services/business/commercial-property" },
          { label: "Commercial Auto", href: "/services/auto/commercial-auto" },
          { label: "Key Person Insurance", href: "/services/life/key-person-insurance" },
          { label: "Group Health", href: "/services/health/group-health" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "hidden md:flex justify-between space-x-10 items-center" }, _attrs))}><div class="hidden md:flex space-x-10 items-center relative">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300"${_scopeId}> Home </span>`);
          } else {
            return [
              createVNode("span", { class: "text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300" }, " Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><button class="flex items-center text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none"> Services `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-down",
        class: ["ml-1 h-4 w-4 transition-transform", { "rotate-180": open.value }]
      }, null, _parent));
      _push(`</button><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="absolute left-0 mt-0 w-64 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-20"><div class="max-h-[calc(100vh-200px)] overflow-y-auto"><!--[-->`);
      ssrRenderList(services, (section) => {
        _push(`<div class="mb-2"><div class="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50 dark:bg-gray-700">${ssrInterpolate(section.label)}</div><!--[-->`);
        ssrRenderList(section.items, (item) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: item.href,
            class: ["block px-6 py-2 text-sm text-neutral-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700", item.active ? "bg-primary/10 text-primary font-medium" : ""]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/resources" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300"${_scopeId}> Resources </span>`);
          } else {
            return [
              createVNode("span", { class: "text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300" }, " Resources ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/about-us" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300"${_scopeId}> About Us </span>`);
          } else {
            return [
              createVNode("span", { class: "text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300" }, " About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300"${_scopeId}> Contact </span>`);
          } else {
            return [
              createVNode("span", { class: "text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300" }, " Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/menu/MenuList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=MenuList-czVVTerB.js.map
