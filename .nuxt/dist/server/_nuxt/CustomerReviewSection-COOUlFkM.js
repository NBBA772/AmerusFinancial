import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_1$1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2 from "./CustomerReviewCard-Ccpp2dwt.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "CustomerReviewSection",
  data() {
    return {
      IntroText: {
        Heading: "Read trusted reviews from our customers"
      },
      reviews: [
        {
          id: 1,
          name: "Person 1",
          company: "Company 1",
          testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere."
        },
        {
          id: 2,
          name: "Person 2",
          company: "Company 2",
          testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 3,
          name: "Person 3",
          company: "Company 3",
          testimonial: "Nunc eget lorem dolor sed. Id aliquet lectus proin nibh nisl condimentum id. Amet massa vitae tortor condimentum lacinia quis ."
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BasicSection = __nuxt_component_0;
  const _component_HeadlineTwo = __nuxt_component_1$1;
  const _component_CustomerReviewCard = __nuxt_component_2;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "dark:bg-gray-800 dark:text-gray-100 my-16" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container flex flex-col items-center mx-auto mb-12 p-4 sm:p-8 md:p-10 md:px-12"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_HeadlineTwo, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($data.IntroText.Heading)}`);
            } else {
              return [
                createTextVNode(toDisplayString($data.IntroText.Heading), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
        ssrRenderList($data.reviews, (review) => {
          _push2(ssrRenderComponent(_component_CustomerReviewCard, {
            key: review.id,
            review
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "container flex flex-col items-center mx-auto mb-12 p-4 sm:p-8 md:p-10 md:px-12" }, [
            createVNode(_component_HeadlineTwo, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($data.IntroText.Heading), 1)
              ]),
              _: 1
            })
          ]),
          createVNode("div", { class: "container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($data.reviews, (review) => {
              return openBlock(), createBlock(_component_CustomerReviewCard, {
                key: review.id,
                review
              }, null, 8, ["review"]);
            }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CustomerReviewSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=CustomerReviewSection-COOUlFkM.js.map
