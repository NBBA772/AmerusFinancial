import __nuxt_component_0 from "./SectionContainer-CRG4W3qY.js";
import { _ as __nuxt_component_2$1 } from "./nuxt-img-CXQw38If.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
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
  name: "HomepageHeroSection",
  data() {
    return {
      IntroText: {
        SubHeading: "Our Commitment to Excellence",
        Heading: "About Good Time Travel",
        Description: "Good Time Travel is a nationwide leading bus charter company providing quality transportation and personal service for point-to-point excursions, long-distance, overnight trips, special events and more. No matter where you are traveling in the United States, our bus charter rentals offer safe, reliable transportation at affordable rates for both large and small groups. We pride ourselves on delivering extensive services to fulfill all your transportation needs with first-rate customer service and safety as our top priorities. Our experienced staff will support and guide you from the first call to the last mile so that your bus rental and trip goes exactly as planned."
      },
      Featured: [
        {
          id: 1,
          title: "Commitment to Safety",
          description: "Providing secure transportation with top-notch safety measures for all our passengers."
        },
        {
          id: 2,
          title: "Unparalleled Customer Service",
          description: "Ensuring a seamless journey from start to finish with personalized attention and support."
        },
        {
          id: 3,
          title: "Reliable and Affordable Travel",
          description: "Offering dependable and cost-effective transportation solutions tailored to your needs."
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
  const _component_NuxtImg = __nuxt_component_2$1;
  _push(ssrRenderComponent(_component_SectionContainer, mergeProps({ class: "text-center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-b3e6c256${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtImg, {
          format: "webp",
          src: "/images/insurance-services.jpg",
          alt: "Happy Kids",
          quality: "80",
          class: "full-width-height"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode(_component_NuxtImg, {
              format: "webp",
              src: "/images/insurance-services.jpg",
              alt: "Happy Kids",
              quality: "80",
              class: "full-width-height"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/InsuranceServicesPage/InsuranceServicesHeroSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b3e6c256"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=InsuranceServicesHeroSection-DeeQhc3i.js.map
