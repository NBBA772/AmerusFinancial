import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_0$1 from "./GridTwoColumns-CDZGjEfF.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2 from "./ParagraphDescription-L8QyXcbq.js";
import { _ as __nuxt_component_2$1 } from "./nuxt-img-CXQw38If.js";
import { u as useColorMode } from "./composables-DGJynRPd.js";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
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
  name: "TwoColumnSection",
  props: {
    title: String,
    description: String,
    mediaFirst: Boolean,
    subTitle: String
  },
  data() {
    return {
      colorMode: useColorMode()
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
                    _push4(` Marketplace Health Insurance (&#39;Obama Care&#39;) `);
                  } else {
                    return [
                      createTextVNode(" Marketplace Health Insurance ('Obama Care') ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ParagraphDescription, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` The Affordable Care Act (ACA), otherwise known as Obamacare, is designed to make guaranteed issue health insurance plans available to everyone. These plans cover preexisting conditions along with a list of essential health benefits that don&#39;t change from plan to plan, known as preventative care. The ACA has established a yearly Open Enrollment period (Nov. 1st-Dec 15th) for enrolling in a qualified health plan. In most cases, if you want ACA coverage, you must enroll in an ACA-compliant medical plan within that period. However, if you experience a qualifying event or major life change outside of that Open Enrollment window, you may be able to enroll during a Special Enrollment period. Contact an agent to see if you qualify. . `);
                  } else {
                    return [
                      createTextVNode(" The Affordable Care Act (ACA), otherwise known as Obamacare, is designed to make guaranteed issue health insurance plans available to everyone. These plans cover preexisting conditions along with a list of essential health benefits that don't change from plan to plan, known as preventative care. The ACA has established a yearly Open Enrollment period (Nov. 1st-Dec 15th) for enrolling in a qualified health plan. In most cases, if you want ACA coverage, you must enroll in an ACA-compliant medical plan within that period. However, if you experience a qualifying event or major life change outside of that Open Enrollment window, you may be able to enroll during a Special Enrollment period. Contact an agent to see if you qualify. . ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="px-4 sm:px-8"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtImg, {
                format: "webp",
                src: "/images/marketplace.jpg",
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
                      createTextVNode(" Marketplace Health Insurance ('Obama Care') ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" The Affordable Care Act (ACA), otherwise known as Obamacare, is designed to make guaranteed issue health insurance plans available to everyone. These plans cover preexisting conditions along with a list of essential health benefits that don't change from plan to plan, known as preventative care. The ACA has established a yearly Open Enrollment period (Nov. 1st-Dec 15th) for enrolling in a qualified health plan. In most cases, if you want ACA coverage, you must enroll in an ACA-compliant medical plan within that period. However, if you experience a qualifying event or major life change outside of that Open Enrollment window, you may be able to enroll during a Special Enrollment period. Contact an agent to see if you qualify. . ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "px-4 sm:px-8" }, [
                  createVNode(_component_NuxtImg, {
                    format: "webp",
                    src: "/images/marketplace.jpg",
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
                    createTextVNode(" Marketplace Health Insurance ('Obama Care') ")
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode(" The Affordable Care Act (ACA), otherwise known as Obamacare, is designed to make guaranteed issue health insurance plans available to everyone. These plans cover preexisting conditions along with a list of essential health benefits that don't change from plan to plan, known as preventative care. The ACA has established a yearly Open Enrollment period (Nov. 1st-Dec 15th) for enrolling in a qualified health plan. In most cases, if you want ACA coverage, you must enroll in an ACA-compliant medical plan within that period. However, if you experience a qualifying event or major life change outside of that Open Enrollment window, you may be able to enroll during a Special Enrollment period. Contact an agent to see if you qualify. . ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "px-4 sm:px-8" }, [
                createVNode(_component_NuxtImg, {
                  format: "webp",
                  src: "/images/marketplace.jpg",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/IndividualAndFamilyInsurancePage/MarketplaceHealthInsuranceSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MarketplaceHealthInsuranceSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  MarketplaceHealthInsuranceSection as default
};
//# sourceMappingURL=MarketplaceHealthInsuranceSection-2KZOdk7b.js.map
