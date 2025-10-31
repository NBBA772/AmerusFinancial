import __nuxt_component_0 from "./SectionContainer-CRG4W3qY.js";
import __nuxt_component_0$1 from "./GridTwoColumns-CDZGjEfF.js";
import __nuxt_component_2 from "./ParagraphSubHeadingHero-CqCgEloW.js";
import __nuxt_component_3 from "./HeadlineOneHero-B_BgiMME.js";
import __nuxt_component_4 from "./ParagraphDescriptionHero-BUKcd6HV.js";
import __nuxt_component_5 from "./ContactButtons-DUFZbfzJ.js";
import __nuxt_component_6 from "./HomePageQuoteForm-CDFA9csT.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
import "./MultiStepForm-CmTdGKHp.js";
const _imports_0 = "" + __publicAssetsURL("images/aged-couple-of-pensioners-talking-with-employee.jpg");
const _sfc_main = {
  name: "HomepageHeroSection",
  data() {
    return {
      IntroText: {
        SubHeading: "Lakeland, FL • Since 2016",
        Heading: "Insurance made simple—for Employers, Families, and Seniors.",
        Description: "One team, comprehensive protection: group benefits & commercial lines for businesses, personal coverage for individuals, and Medicare guidance for seniors."
      },
      Featured: [
        {
          id: 1,
          title: "Individual & Family",
          description: "Ensure your family's future with our personalized insurance plans. From life to health coverage, we tailor solutions to meet your needs, providing security and peace of mind.",
          to: "/individual-health-insurance/",
          text: "Get Started Now!"
        },
        {
          id: 2,
          title: "Senior",
          description: "Navigate retirement confidently with our senior insurance plans. From Medicare to long-term care coverage, we offer personalized support for your golden years.",
          to: "/senior-solutions/",
          text: "Get Started Now!"
        },
        {
          id: 3,
          title: "Business",
          description: "Protect your business with our tailored insurance solutions. From liability coverage to employee benefits, we safeguard your interests and promote growth.",
          to: "/business-solutions/",
          text: "Get Started Now!"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionContainer = __nuxt_component_0;
  const _component_GridTwoColumns = __nuxt_component_0$1;
  const _component_ParagraphSubHeadingHero = __nuxt_component_2;
  const _component_HeadlineOneHero = __nuxt_component_3;
  const _component_ParagraphDescriptionHero = __nuxt_component_4;
  const _component_ContactButtons = __nuxt_component_5;
  const _component_HomePageQuoteForm = __nuxt_component_6;
  _push(ssrRenderComponent(_component_SectionContainer, mergeProps({ class: "py-8 text-center bg-[#000000] relative" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="absolute inset-0 z-10" data-v-37ae6835${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Background" class="w-full h-full object-cover opacity-40" data-v-37ae6835${_scopeId}></div><div class="max-w-5xl mx-auto p-4 relative z-10" data-v-37ae6835${_scopeId}>`);
        _push2(ssrRenderComponent(_component_GridTwoColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div data-v-37ae6835${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_ParagraphSubHeadingHero, { class: "text-white" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($data.IntroText.SubHeading)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($data.IntroText.SubHeading), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_HeadlineOneHero, { class: "text-white" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($data.IntroText.Heading)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($data.IntroText.Heading), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ParagraphDescriptionHero, { class: "text-white" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($data.IntroText.Description)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($data.IntroText.Description), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ContactButtons, null, null, _parent3, _scopeId2));
              _push3(`</div><div data-v-37ae6835${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_HomePageQuoteForm, { tag: "HomePageQuoteForm" }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode(_component_ParagraphSubHeadingHero, { class: "text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.SubHeading), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HeadlineOneHero, { class: "text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.Heading), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescriptionHero, { class: "text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.Description), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ContactButtons)
                ]),
                createVNode("div", null, [
                  createVNode(_component_HomePageQuoteForm, { tag: "HomePageQuoteForm" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "absolute inset-0 z-10" }, [
            createVNode("img", {
              src: _imports_0,
              alt: "Background",
              class: "w-full h-full object-cover opacity-40"
            })
          ]),
          createVNode("div", { class: "max-w-5xl mx-auto p-4 relative z-10" }, [
            createVNode(_component_GridTwoColumns, null, {
              default: withCtx(() => [
                createVNode("div", null, [
                  createVNode(_component_ParagraphSubHeadingHero, { class: "text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.SubHeading), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HeadlineOneHero, { class: "text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.Heading), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescriptionHero, { class: "text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.Description), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ContactButtons)
                ]),
                createVNode("div", null, [
                  createVNode(_component_HomePageQuoteForm, { tag: "HomePageQuoteForm" })
                ])
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HomePage/HomepageHeroSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-37ae6835"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=HomepageHeroSection-uUHQMeWN.js.map
