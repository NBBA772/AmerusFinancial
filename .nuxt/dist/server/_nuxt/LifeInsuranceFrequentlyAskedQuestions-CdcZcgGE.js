import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2 from "./ParagraphDescription-L8QyXcbq.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, Transition, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "HealthcareFrequentlyAskedQuestions",
  props: {
    items: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      activeItem: this.active
    };
  },
  methods: {
    toggleItem(index) {
      if (this.activeItem === index) {
        this.activeItem = null;
      } else {
        this.activeItem = index;
      }
    },
    isActive(index) {
      return this.activeItem === index;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BasicSection = __nuxt_component_0;
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_ParagraphDescription = __nuxt_component_2;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_HeadlineTwo, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Frequently Asked Questions`);
            } else {
              return [
                createTextVNode("Frequently Asked Questions")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="accordion"${_scopeId}><div${_scopeId}><!--[-->`);
        ssrRenderList($props.items, (item, index) => {
          _push2(`<div class="accordion-item"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_ParagraphDescription, {
            class: "accordion-header font-extrabold",
            onClick: ($event) => $options.toggleItem(index)
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(item.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`<div class="${ssrRenderClass([{ hidden: !$options.isActive(index) }, "accordion-body bg-blue-100"])}"${_scopeId}>${ssrInterpolate(item.content)}</div></div>`);
        });
        _push2(`<!--]--></div></div>`);
      } else {
        return [
          createVNode("div", { class: "text-center" }, [
            createVNode(_component_HeadlineTwo, null, {
              default: withCtx(() => [
                createTextVNode("Frequently Asked Questions")
              ]),
              _: 1
            })
          ]),
          createVNode("div", { class: "accordion" }, [
            createVNode("div", null, [
              (openBlock(true), createBlock(Fragment, null, renderList($props.items, (item, index) => {
                return openBlock(), createBlock("div", {
                  class: "accordion-item",
                  key: index
                }, [
                  createVNode(_component_ParagraphDescription, {
                    class: "accordion-header font-extrabold",
                    onClick: ($event) => $options.toggleItem(index)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(Transition, { name: "slide" }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: ["accordion-body bg-blue-100", { hidden: !$options.isActive(index) }]
                      }, toDisplayString(item.content), 3)
                    ]),
                    _: 2
                  }, 1024)
                ]);
              }), 128))
            ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/LifeInsurancePage/LifeInsuranceFrequentlyAskedQuestions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LifeInsuranceFrequentlyAskedQuestions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LifeInsuranceFrequentlyAskedQuestions as default
};
//# sourceMappingURL=LifeInsuranceFrequentlyAskedQuestions-CdcZcgGE.js.map
