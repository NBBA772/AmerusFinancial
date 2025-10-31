import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2 from "./ParagraphDescription-L8QyXcbq.js";
import { ref, onUnmounted, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "TrustedCarriers",
  __ssrInlineRender: true,
  setup(__props) {
    const logos = ref([
      //   {
      //     src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      //     alt: "HTML5",
      //   },
      //   {
      //     src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      //     alt: "CSS3",
      //   },
      //   {
      //     src: "/img/logos/javascript.png",
      //     alt: "JavaScript",
      //   },
      { src: "/images/logos/Allstate.png", alt: "Allstate" },
      { src: "/images/logos/Humana.png", alt: "Humana" },
      { src: "/images/logos/ml.png", alt: "ml" },
      { src: "/images/logos/mutual.png", alt: "mutual" },
      { src: "/images/logos/Travelers.png", alt: "Travelers" },
      { src: "/images/logos/UnitedHealthcare.png", alt: "UnitedHealthcare" }
    ]);
    const fullLogoList = ref([
      ...logos.value,
      ...logos.value,
      ...logos.value,
      ...logos.value,
      ...logos.value
    ]);
    const logosContainer = ref(null);
    const logoList = ref(null);
    let animationFrameId = null;
    let scrollPosition = 0;
    let logoListWidth = 0;
    function startScrolling() {
      if (!logoList.value)
        return;
      logoListWidth = logoList.value.scrollWidth;
      function scroll() {
        scrollPosition -= 1;
        if (scrollPosition < -logoListWidth / 2) {
          scrollPosition = 0;
        }
        logoList.value.style.transform = `translateX(${scrollPosition}px)`;
        animationFrameId = requestAnimationFrame(scroll);
      }
      scroll();
    }
    function stopScrolling() {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    }
    onUnmounted(() => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (logosContainer.value) {
        logosContainer.value.removeEventListener("mouseover", stopScrolling);
        logosContainer.value.removeEventListener("mouseout", startScrolling);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ColumnAnimated = resolveComponent("ColumnAnimated");
      const _component_HeadlineTwo = __nuxt_component_1;
      const _component_ParagraphDescription = __nuxt_component_2;
      _push(ssrRenderComponent(_component_ColumnAnimated, mergeProps({ animationClass: "fade-in" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="dark:bg-gray-950 py-8 border-t-2 border-b-2 border-gray-700" data-v-a37e67f6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HeadlineTwo, { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Trusted Carrier Partners `);
                } else {
                  return [
                    createTextVNode(" Trusted Carrier Partners ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ParagraphDescription, { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` A sample of the carriers we work with to bring you competitive coverage and pricing. `);
                } else {
                  return [
                    createTextVNode(" A sample of the carriers we work with to bring you competitive coverage and pricing. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="logos relative overflow-hidden py-10" data-v-a37e67f6${_scopeId}><div class="fade-overlay left" data-v-a37e67f6${_scopeId}></div><div class="fade-overlay right" data-v-a37e67f6${_scopeId}></div><div class="logo-list flex" data-v-a37e67f6${_scopeId}><!--[-->`);
            ssrRenderList(fullLogoList.value, (logo, index) => {
              _push2(`<div class="logo-item mx-4" data-v-a37e67f6${_scopeId}><img${ssrRenderAttr("src", logo.src)}${ssrRenderAttr("alt", logo.alt)} class="h-12 sm:h-16 md:h-20 lg:h-12" data-v-a37e67f6${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "dark:bg-gray-950 py-8 border-t-2 border-b-2 border-gray-700" }, [
                createVNode(_component_HeadlineTwo, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode(" Trusted Carrier Partners ")
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode(" A sample of the carriers we work with to bring you competitive coverage and pricing. ")
                  ]),
                  _: 1
                }),
                createVNode("div", {
                  ref_key: "logosContainer",
                  ref: logosContainer,
                  class: "logos relative overflow-hidden py-10"
                }, [
                  createVNode("div", { class: "fade-overlay left" }),
                  createVNode("div", { class: "fade-overlay right" }),
                  createVNode("div", {
                    ref_key: "logoList",
                    ref: logoList,
                    class: "logo-list flex"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(fullLogoList.value, (logo, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "logo-item mx-4"
                      }, [
                        createVNode("img", {
                          src: logo.src,
                          alt: logo.alt,
                          class: "h-12 sm:h-16 md:h-20 lg:h-12"
                        }, null, 8, ["src", "alt"])
                      ]);
                    }), 128))
                  ], 512)
                ], 512)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HomePage/TrustedCarriers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a37e67f6"]]);
export {
  __nuxt_component_4 as default
};
//# sourceMappingURL=TrustedCarriers-Cp14900Y.js.map
