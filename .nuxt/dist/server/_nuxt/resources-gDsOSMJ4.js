import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./HomepageHeroSection-uUHQMeWN.js";
import _sfc_main$1 from "./ResourceTabs-DEQmcHu4.js";
import _sfc_main$2 from "./ResourceCard-Do2j0t8n.js";
import __nuxt_component_4 from "./NeedPersonalizedAssistance-bBkQUGmK.js";
import _sfc_main$3 from "./CallToAction-CmwVfqHS.js";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SectionContainer-CRG4W3qY.js";
import "./GridTwoColumns-CDZGjEfF.js";
import "./ParagraphSubHeadingHero-CqCgEloW.js";
import "./HeadlineOneHero-B_BgiMME.js";
import "./ParagraphDescriptionHero-BUKcd6HV.js";
import "./ContactButtons-DUFZbfzJ.js";
import "./nuxt-link-DuPix_nQ.js";
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
import "./HomePageQuoteForm-CDFA9csT.js";
import "./MultiStepForm-CmTdGKHp.js";
import "./Icon-6AEq6jga.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PatternSection = __nuxt_component_0;
  const _component_HomepageHeroSection = __nuxt_component_1;
  const _component_ResourceTabs = _sfc_main$1;
  const _component_ResourceCard = _sfc_main$2;
  const _component_NeedPersonalizedAssistance = __nuxt_component_4;
  const _component_CallToAction = _sfc_main$3;
  _push(ssrRenderComponent(_component_PatternSection, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HomepageHeroSection, null, null, _parent2, _scopeId));
        _push2(`<div class="container mx-auto py-12 px-4"${_scopeId}><div class="text-center mb-10"${_scopeId}><h1 class="text-3xl md:text-4xl font-bold mb-4"${_scopeId}>Client Resources &amp; Tools</h1><p class="text-lg text-gray-600 max-w-3xl mx-auto"${_scopeId}>Access our collection of calculators, guides, and tools to help you make informed insurance and financial decisions.</p></div>`);
        _push2(ssrRenderComponent(_component_ResourceTabs, null, {
          guides: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ResourceCard, {
                title: "Medicare Guide",
                description: "A comprehensive guide to understanding Medicare and its different parts.",
                link: "/guides/medicare-guide",
                icon: "lucide:file-text"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ResourceCard, {
                title: "Life Insurance Buyer's Guide",
                description: "Learn about different types of life insurance and how to choose the right policy.",
                link: "/guides/life-insurance-buyers-guide",
                icon: "lucide:book"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ResourceCard, {
                title: "Health Insurance Glossary",
                description: "A complete glossary of health insurance terms and definitions.",
                link: "/guides/health-insurance-glossary",
                icon: "lucide:book"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ResourceCard, {
                title: "Business Insurance Tax Guide",
                description: "Learn how businesses can save thousands on taxes with strategic insurance planning.",
                link: "/guides/business-insurance-guide",
                icon: "lucide:briefcase",
                features: ["Tax Strategies", "Group Benefits", "Save Thousands", "Implementation Guide"],
                isNew: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ResourceCard, {
                title: "Auto Insurance Guide",
                description: "A comprehensive guide to auto insurance coverage, rates, claims, and money-saving tips.",
                link: "/guides/auto-insurance-guide",
                icon: "lucide:car",
                features: ["Coverage Options", "Premium Factors", "Claims Process", "Money-Saving Tips"],
                isNew: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ResourceCard, {
                title: "Retirement Planning Checklist",
                description: "An interactive checklist to track your retirement planning progress through every life stage.",
                link: "/guides/retirement-planning-checklist",
                icon: "lucide:calendar",
                features: ["Interactive Tracking", "Age-Based Guidance", "Expert Tips", "Progress Tracking"],
                isNew: ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ResourceCard, {
                  title: "Medicare Guide",
                  description: "A comprehensive guide to understanding Medicare and its different parts.",
                  link: "/guides/medicare-guide",
                  icon: "lucide:file-text"
                }),
                createVNode(_component_ResourceCard, {
                  title: "Life Insurance Buyer's Guide",
                  description: "Learn about different types of life insurance and how to choose the right policy.",
                  link: "/guides/life-insurance-buyers-guide",
                  icon: "lucide:book"
                }),
                createVNode(_component_ResourceCard, {
                  title: "Health Insurance Glossary",
                  description: "A complete glossary of health insurance terms and definitions.",
                  link: "/guides/health-insurance-glossary",
                  icon: "lucide:book"
                }),
                createVNode(_component_ResourceCard, {
                  title: "Business Insurance Tax Guide",
                  description: "Learn how businesses can save thousands on taxes with strategic insurance planning.",
                  link: "/guides/business-insurance-guide",
                  icon: "lucide:briefcase",
                  features: ["Tax Strategies", "Group Benefits", "Save Thousands", "Implementation Guide"],
                  isNew: ""
                }),
                createVNode(_component_ResourceCard, {
                  title: "Auto Insurance Guide",
                  description: "A comprehensive guide to auto insurance coverage, rates, claims, and money-saving tips.",
                  link: "/guides/auto-insurance-guide",
                  icon: "lucide:car",
                  features: ["Coverage Options", "Premium Factors", "Claims Process", "Money-Saving Tips"],
                  isNew: ""
                }),
                createVNode(_component_ResourceCard, {
                  title: "Retirement Planning Checklist",
                  description: "An interactive checklist to track your retirement planning progress through every life stage.",
                  link: "/guides/retirement-planning-checklist",
                  icon: "lucide:calendar",
                  features: ["Interactive Tracking", "Age-Based Guidance", "Expert Tips", "Progress Tracking"],
                  isNew: ""
                })
              ];
            }
          }),
          blog: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p class="text-gray-500 text-center"${_scopeId2}>No blog posts yet.</p>`);
            } else {
              return [
                createVNode("p", { class: "text-gray-500 text-center" }, "No blog posts yet.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NeedPersonalizedAssistance, null, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_CallToAction, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HomepageHeroSection),
          createVNode("div", { class: "container mx-auto py-12 px-4" }, [
            createVNode("div", { class: "text-center mb-10" }, [
              createVNode("h1", { class: "text-3xl md:text-4xl font-bold mb-4" }, "Client Resources & Tools"),
              createVNode("p", { class: "text-lg text-gray-600 max-w-3xl mx-auto" }, "Access our collection of calculators, guides, and tools to help you make informed insurance and financial decisions.")
            ]),
            createVNode(_component_ResourceTabs, null, {
              guides: withCtx(() => [
                createVNode(_component_ResourceCard, {
                  title: "Medicare Guide",
                  description: "A comprehensive guide to understanding Medicare and its different parts.",
                  link: "/guides/medicare-guide",
                  icon: "lucide:file-text"
                }),
                createVNode(_component_ResourceCard, {
                  title: "Life Insurance Buyer's Guide",
                  description: "Learn about different types of life insurance and how to choose the right policy.",
                  link: "/guides/life-insurance-buyers-guide",
                  icon: "lucide:book"
                }),
                createVNode(_component_ResourceCard, {
                  title: "Health Insurance Glossary",
                  description: "A complete glossary of health insurance terms and definitions.",
                  link: "/guides/health-insurance-glossary",
                  icon: "lucide:book"
                }),
                createVNode(_component_ResourceCard, {
                  title: "Business Insurance Tax Guide",
                  description: "Learn how businesses can save thousands on taxes with strategic insurance planning.",
                  link: "/guides/business-insurance-guide",
                  icon: "lucide:briefcase",
                  features: ["Tax Strategies", "Group Benefits", "Save Thousands", "Implementation Guide"],
                  isNew: ""
                }),
                createVNode(_component_ResourceCard, {
                  title: "Auto Insurance Guide",
                  description: "A comprehensive guide to auto insurance coverage, rates, claims, and money-saving tips.",
                  link: "/guides/auto-insurance-guide",
                  icon: "lucide:car",
                  features: ["Coverage Options", "Premium Factors", "Claims Process", "Money-Saving Tips"],
                  isNew: ""
                }),
                createVNode(_component_ResourceCard, {
                  title: "Retirement Planning Checklist",
                  description: "An interactive checklist to track your retirement planning progress through every life stage.",
                  link: "/guides/retirement-planning-checklist",
                  icon: "lucide:calendar",
                  features: ["Interactive Tracking", "Age-Based Guidance", "Expert Tips", "Progress Tracking"],
                  isNew: ""
                })
              ]),
              blog: withCtx(() => [
                createVNode("p", { class: "text-gray-500 text-center" }, "No blog posts yet.")
              ]),
              _: 1
            }),
            createVNode(_component_NeedPersonalizedAssistance)
          ]),
          createVNode(_component_CallToAction)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resources = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  resources as default
};
//# sourceMappingURL=resources-gDsOSMJ4.js.map
