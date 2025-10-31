import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_0$1 from "./GridTwoColumns-CDZGjEfF.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2 from "./ParagraphDescription-L8QyXcbq.js";
import { _ as __nuxt_component_0$2 } from "./nuxt-link-DuPix_nQ.js";
import { _ as __nuxt_component_2$1 } from "./nuxt-img-CXQw38If.js";
import { u as useColorMode } from "./composables-DGJynRPd.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
  name: "TwoColumnSection",
  props: {
    title: String,
    description: String,
    mediaFirst: Boolean,
    subTitle: String
  },
  data() {
    return {
      colorMode: useColorMode(),
      IntroText: {
        SubHeading: "Empower your business to new heights with our marketing blueprint. Let us make it effortless for your customers to find you!",
        Heading: "Safeguarding Your Business's Success: Comprehensive Insurance Solutions for Enterprises",
        description: "Protect your business and its assets with our comprehensive Business Solutions. At Amerus Financial, we recognize the unique challenges businesses face in today's dynamic environment. From liability coverage to employee benefits packages, our tailored solutions are designed to mitigate risks and promote growth. Our experienced advisors work closely with you to understand your business needs and objectives, offering strategic guidance and support to help you achieve your goals. Partner with Amerus Financial to safeguard your business's success and ensure a prosperous future."
      }
    };
  },
  computed: {
    // const isDark = this.$colorMode.value === "dark";
    isDark() {
      if (this.colorMode.preference === "dark") {
        return true;
      } else {
        return false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BasicSection = __nuxt_component_0;
  const _component_GridTwoColumns = __nuxt_component_0$1;
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_ParagraphDescription = __nuxt_component_2;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_NuxtImg = __nuxt_component_2$1;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_GridTwoColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="px-4 sm:px-8"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_HeadlineTwo, null, {
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
              _push3(ssrRenderComponent(_component_ParagraphDescription, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($data.IntroText.description)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($data.IntroText.description), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/business-solutions/",
                class: "text-slate-100 hover:text-slate-300 dark:hover:text-slate-100 dark:text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mr-2 mb-2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Learn More `);
                  } else {
                    return [
                      createTextVNode(" Learn More ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div><div class="px-4 sm:px-8"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtImg, {
                format: "webp",
                src: "/images/Business-Solutions.jpg",
                sizes: "sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px",
                alt: "Bus Driver",
                quality: "80",
                loading: "lazy"
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "px-4 sm:px-8" }, [
                  createVNode(_component_HeadlineTwo, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.Heading), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.description), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/business-solutions/",
                      class: "text-slate-100 hover:text-slate-300 dark:hover:text-slate-100 dark:text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mr-2 mb-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Learn More ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "px-4 sm:px-8" }, [
                  createVNode(_component_NuxtImg, {
                    format: "webp",
                    src: "/images/Business-Solutions.jpg",
                    sizes: "sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px",
                    alt: "Bus Driver",
                    quality: "80",
                    loading: "lazy"
                  })
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
              createVNode("div", { class: "px-4 sm:px-8" }, [
                createVNode(_component_HeadlineTwo, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.IntroText.Heading), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.IntroText.description), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/business-solutions/",
                    class: "text-slate-100 hover:text-slate-300 dark:hover:text-slate-100 dark:text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mr-2 mb-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Learn More ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "px-4 sm:px-8" }, [
                createVNode(_component_NuxtImg, {
                  format: "webp",
                  src: "/images/Business-Solutions.jpg",
                  sizes: "sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px",
                  alt: "Bus Driver",
                  quality: "80",
                  loading: "lazy"
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HomePage/BusinessSolutionsSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BusinessSolutionsSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BusinessSolutionsSection as default
};
//# sourceMappingURL=BusinessSolutionsSection-HNL55inb.js.map
