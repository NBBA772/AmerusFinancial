import __nuxt_component_0 from "./SectionContainer-CRG4W3qY.js";
import __nuxt_component_0$1 from "./GridTwoColumns-CDZGjEfF.js";
import { _ as __nuxt_component_2 } from "./nuxt-img-CXQw38If.js";
import __nuxt_component_2$1 from "./ParagraphSubHeadingHero-CqCgEloW.js";
import __nuxt_component_3 from "./HeadlineOneHero-B_BgiMME.js";
import __nuxt_component_4 from "./ParagraphDescriptionHero-BUKcd6HV.js";
import __nuxt_component_6 from "./IndividualFamilyIndexedUniversalLifeInsuranceQuoteForm-DV66MX0m.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = {
  name: "HomepageHeroSection",
  data() {
    return {
      IntroText: {
        SubHeading: "Experience the Differnece ",
        Heading: "A Company Truly Commited To Your Future",
        Description: "At Amerus Financial we are serious about putting the needs and desires of our clients before anything else. We take the time to carefully conside your individual circumstances before making any reccomendations. Our experienced planners take pride in searching out solutions to complex needs and making sure that we offer sound financial advise. With over 4,000 satisfied clients at Amerus Financial Group we strive to go above and beyond your expectations."
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionContainer = __nuxt_component_0;
  const _component_GridTwoColumns = __nuxt_component_0$1;
  const _component_NuxtImg = __nuxt_component_2;
  const _component_ParagraphSubHeadingHero = __nuxt_component_2$1;
  const _component_HeadlineOneHero = __nuxt_component_3;
  const _component_ParagraphDescriptionHero = __nuxt_component_4;
  const _component_IndividualFamilyIndexedUniversalLifeInsuranceQuoteForm = __nuxt_component_6;
  _push(ssrRenderComponent(_component_SectionContainer, mergeProps({ class: "text-center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_GridTwoColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div data-v-e212fe36${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtImg, {
                format: "webp",
                src: "/images/annuities.jpg",
                alt: "Happy Kids",
                quality: "80",
                sizes: "sm:400px md:600px lg:800px xl:1000px xxl:1500px 2xl:3000px",
                class: "full-width-height"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="p-4" data-v-e212fe36${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_ParagraphSubHeadingHero, null, {
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
              _push3(ssrRenderComponent(_component_HeadlineOneHero, null, {
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
              _push3(ssrRenderComponent(_component_ParagraphDescriptionHero, null, {
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
              _push3(ssrRenderComponent(_component_IndividualFamilyIndexedUniversalLifeInsuranceQuoteForm, { tag: "IndividualFamilyIndexedUniversalLifeInsuranceQuote" }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode(_component_NuxtImg, {
                    format: "webp",
                    src: "/images/annuities.jpg",
                    alt: "Happy Kids",
                    quality: "80",
                    sizes: "sm:400px md:600px lg:800px xl:1000px xxl:1500px 2xl:3000px",
                    class: "full-width-height"
                  })
                ]),
                createVNode("div", { class: "p-4" }, [
                  createVNode(_component_ParagraphSubHeadingHero, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.SubHeading), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HeadlineOneHero, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.Heading), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescriptionHero, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.Description), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_IndividualFamilyIndexedUniversalLifeInsuranceQuoteForm, { tag: "IndividualFamilyIndexedUniversalLifeInsuranceQuote" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_GridTwoColumns, null, {
            default: withCtx(() => [
              createVNode("div", null, [
                createVNode(_component_NuxtImg, {
                  format: "webp",
                  src: "/images/annuities.jpg",
                  alt: "Happy Kids",
                  quality: "80",
                  sizes: "sm:400px md:600px lg:800px xl:1000px xxl:1500px 2xl:3000px",
                  class: "full-width-height"
                })
              ]),
              createVNode("div", { class: "p-4" }, [
                createVNode(_component_ParagraphSubHeadingHero, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.IntroText.SubHeading), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_HeadlineOneHero, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.IntroText.Heading), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescriptionHero, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.IntroText.Description), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_IndividualFamilyIndexedUniversalLifeInsuranceQuoteForm, { tag: "IndividualFamilyIndexedUniversalLifeInsuranceQuote" })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AnnuitiesPage/AnnuitiesServicesHeroSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AnnuitiesServicesHeroSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e212fe36"]]);
export {
  AnnuitiesServicesHeroSection as default
};
//# sourceMappingURL=AnnuitiesServicesHeroSection-CrOwbwot.js.map
