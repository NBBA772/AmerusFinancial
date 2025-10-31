import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2$1 from "./ParagraphDescription-L8QyXcbq.js";
import { u as useColorMode } from "./composables-DGJynRPd.js";
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
  name: "Ideal Customers Section",
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
        Headline: "Empowering Futures: Amerus Financial Group - Your Trusted Insurance Partner for Over Two Decades",
        description: "Established for over two decades, Amerus Financial Group is a comprehensive insurance agency headquartered in the scenic city of Lakeland, Florida. With a track record that spans more than 20 years, we have specialized in delivering personalized insurance solutions to both families and businesses alike. Over the years, our reach has expanded to a nationwide client base, boasting over 4,000 satisfied customers from various walks of life. This broad and diverse clientele has positioned Amerus Financial as a trusted authority in the insurance sector, especially when it comes to navigating the intricate challenges posed by the constantly evolving landscape of insurance regulations and offerings. Our team of highly skilled agents is our most valuable asset. They are not just trained; they are empowered with the knowledge and tools needed to tackle even the most complex insurance queries and problems. Through rigorous training programs and real-world experience, our agents have honed their skills to simplify what can often be a perplexing and daunting process of purchasing insurance. Whether you have questions that are difficult to answer or you’re just starting to explore your insurance options, our experts are equipped to guide you. What sets us apart is our commitment to personalization. We don’t believe in one-size-fits-all solutions when it comes to insurance. We diligently review your existing insurance portfolio and financial situation to provide you with tailored recommendations that are uniquely aligned with your specific needs and objectives. This meticulous approach ensures that you don’t just buy insurance; you invest in a safety net that genuinely suits you. At Amerus Financial Group, our mission is to make the complexities of the insurance world understandable, providing you with the best possible options to secure your future. We pride ourselves on being not just a service but a dependable resource for all your insurance needs."
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
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_ParagraphDescription = __nuxt_component_2$1;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="p-4 sm:p-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_HeadlineTwo, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($data.IntroText.Headline)}`);
            } else {
              return [
                createTextVNode(toDisplayString($data.IntroText.Headline), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Established for over two decades, Amerus Financial Group is a comprehensive insurance agency headquartered in the scenic city of Lakeland, Florida. With a track record that spans more than 20 years, we have specialized in delivering personalized insurance solutions to both families and businesses alike. Over the years, our reach has expanded to a nationwide client base, boasting over 4,000 satisfied customers from various walks of life. This broad and diverse clientele has positioned Amerus Financial as a trusted authority in the insurance sector, especially when it comes to navigating the intricate challenges posed by the constantly evolving landscape of insurance regulations and offerings. `);
            } else {
              return [
                createTextVNode(" Established for over two decades, Amerus Financial Group is a comprehensive insurance agency headquartered in the scenic city of Lakeland, Florida. With a track record that spans more than 20 years, we have specialized in delivering personalized insurance solutions to both families and businesses alike. Over the years, our reach has expanded to a nationwide client base, boasting over 4,000 satisfied customers from various walks of life. This broad and diverse clientele has positioned Amerus Financial as a trusted authority in the insurance sector, especially when it comes to navigating the intricate challenges posed by the constantly evolving landscape of insurance regulations and offerings. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Our team of highly skilled agents is our most valuable asset. They are not just trained; they are empowered with the knowledge and tools needed to tackle even the most complex insurance queries and problems. Through rigorous training programs and real-world experience, our agents have honed their skills to simplify what can often be a perplexing and daunting process of purchasing insurance. Whether you have questions that are difficult to answer or you’re just starting to explore your insurance options, our experts are equipped to guide you. `);
            } else {
              return [
                createTextVNode(" Our team of highly skilled agents is our most valuable asset. They are not just trained; they are empowered with the knowledge and tools needed to tackle even the most complex insurance queries and problems. Through rigorous training programs and real-world experience, our agents have honed their skills to simplify what can often be a perplexing and daunting process of purchasing insurance. Whether you have questions that are difficult to answer or you’re just starting to explore your insurance options, our experts are equipped to guide you. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` What sets us apart is our commitment to personalization. We don’t believe in one-size-fits-all solutions when it comes to insurance. We diligently review your existing insurance portfolio and financial situation to provide you with tailored recommendations that are uniquely aligned with your specific needs and objectives. This meticulous approach ensures that you don’t just buy insurance; you invest in a safety net that genuinely suits you. `);
            } else {
              return [
                createTextVNode(" What sets us apart is our commitment to personalization. We don’t believe in one-size-fits-all solutions when it comes to insurance. We diligently review your existing insurance portfolio and financial situation to provide you with tailored recommendations that are uniquely aligned with your specific needs and objectives. This meticulous approach ensures that you don’t just buy insurance; you invest in a safety net that genuinely suits you. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` At Amerus Financial Group, our mission is to make the complexities of the insurance world understandable, providing you with the best possible options to secure your future. We pride ourselves on being not just a service but a dependable resource for all your insurance needs.`);
            } else {
              return [
                createTextVNode(" At Amerus Financial Group, our mission is to make the complexities of the insurance world understandable, providing you with the best possible options to secure your future. We pride ourselves on being not just a service but a dependable resource for all your insurance needs.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "p-4 sm:p-8" }, [
            createVNode(_component_HeadlineTwo, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($data.IntroText.Headline), 1)
              ]),
              _: 1
            }),
            createVNode(_component_ParagraphDescription, null, {
              default: withCtx(() => [
                createTextVNode(" Established for over two decades, Amerus Financial Group is a comprehensive insurance agency headquartered in the scenic city of Lakeland, Florida. With a track record that spans more than 20 years, we have specialized in delivering personalized insurance solutions to both families and businesses alike. Over the years, our reach has expanded to a nationwide client base, boasting over 4,000 satisfied customers from various walks of life. This broad and diverse clientele has positioned Amerus Financial as a trusted authority in the insurance sector, especially when it comes to navigating the intricate challenges posed by the constantly evolving landscape of insurance regulations and offerings. ")
              ]),
              _: 1
            }),
            createVNode(_component_ParagraphDescription, null, {
              default: withCtx(() => [
                createTextVNode(" Our team of highly skilled agents is our most valuable asset. They are not just trained; they are empowered with the knowledge and tools needed to tackle even the most complex insurance queries and problems. Through rigorous training programs and real-world experience, our agents have honed their skills to simplify what can often be a perplexing and daunting process of purchasing insurance. Whether you have questions that are difficult to answer or you’re just starting to explore your insurance options, our experts are equipped to guide you. ")
              ]),
              _: 1
            }),
            createVNode(_component_ParagraphDescription, null, {
              default: withCtx(() => [
                createTextVNode(" What sets us apart is our commitment to personalization. We don’t believe in one-size-fits-all solutions when it comes to insurance. We diligently review your existing insurance portfolio and financial situation to provide you with tailored recommendations that are uniquely aligned with your specific needs and objectives. This meticulous approach ensures that you don’t just buy insurance; you invest in a safety net that genuinely suits you. ")
              ]),
              _: 1
            }),
            createVNode(_component_ParagraphDescription, null, {
              default: withCtx(() => [
                createTextVNode(" At Amerus Financial Group, our mission is to make the complexities of the insurance world understandable, providing you with the best possible options to secure your future. We pride ourselves on being not just a service but a dependable resource for all your insurance needs.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutUs/AboutAmerusFinancialSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=AboutAmerusFinancialSection-D2XAZ328.js.map
