import __nuxt_component_0 from "./SectionContainer-CRG4W3qY.js";
import __nuxt_component_0$1 from "./GridTwoColumns-CDZGjEfF.js";
import __nuxt_component_2 from "./ParagraphSubHeadingHero-CqCgEloW.js";
import __nuxt_component_3 from "./HeadlineOneHero-B_BgiMME.js";
import __nuxt_component_4 from "./ParagraphDescriptionHero-BUKcd6HV.js";
import _sfc_main$1 from "./RegisterForm-DrFF2uLd.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vue/reactivity";
import "destr";
import "klona";
import "hookable";
import "devalue";
import "defu";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
import "radix3";
import "cookie-es";
import "ohash";
const _sfc_main = {
  name: "Homepage Hero Section",
  data() {
    return {
      IntroText: {
        SubHeading: "Join our community and start planning your next adventure.",
        Heading: "Get Started with Good Time Travel Today!",
        Description: "Ready to embark on your next journey? Sign up with Good Time Travel today and gain access to exclusive deals, personalized trip recommendations, and hassle-free booking options. Our user-friendly sign-up form makes it easy to create an account and start exploring our wide range of transportation services. Whether you're planning a group outing, corporate event, or school trip, we've got you covered. Join now and experience the convenience and reliability of Good Time Travel for all your transportation needs."
      },
      Featured: [
        {
          id: 1,
          title: "Unmatched Comfort",
          description: "Travel in style and relaxation with our luxurious reclining seats and spacious interiors, ensuring a smooth and enjoyable ride for all passengers."
        },
        {
          id: 2,
          title: "Convenient Amenities",
          description: "Stay connected and entertained throughout your journey with onboard flat screen monitors and charging ports, providing entertainment and power at your fingertips."
        },
        {
          id: 3,
          title: "Expert Service",
          description: "Our dedicated and friendly staff are committed to providing top-notch service, from assistance with loading luggage to ensuring a safe and pleasant travel experience for all."
        }
      ],
      CTA: {
        to: "/get-started",
        text: "Get Started Now!"
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionContainer = __nuxt_component_0;
  const _component_GridTwoColumns = __nuxt_component_0$1;
  const _component_ParagraphSubHeadingHero = __nuxt_component_2;
  const _component_HeadlineOneHero = __nuxt_component_3;
  const _component_ParagraphDescriptionHero = __nuxt_component_4;
  const _component_RegisterForm = _sfc_main$1;
  _push(ssrRenderComponent(_component_SectionContainer, mergeProps({ class: "bg-cover bg-center background text-center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_GridTwoColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div data-v-ab1489d0${_scopeId2}>`);
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
              _push3(`</div><div data-v-ab1489d0${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_RegisterForm, null, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", null, [
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
                  })
                ]),
                createVNode("div", null, [
                  createVNode(_component_RegisterForm)
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
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_RegisterForm)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/GetStarted/GetStartedHeroSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GetStartedHeroSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ab1489d0"]]);
export {
  GetStartedHeroSection as default
};
//# sourceMappingURL=GetStartedHeroSection-ZQC2AxNQ.js.map
