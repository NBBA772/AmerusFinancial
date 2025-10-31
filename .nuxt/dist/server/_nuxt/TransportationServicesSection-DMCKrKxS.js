import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2 from "./ParagraphDescription-L8QyXcbq.js";
import __nuxt_component_3 from "./CardDeckFourColumns-QI1OpdtO.js";
import __nuxt_component_4 from "./IndustryCard-DDVm-MAg.js";
import { withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./nuxt-img-CXQw38If.js";
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
  name: "Industries We Serve",
  data() {
    return {
      IntroText: {
        SubHeading: "",
        Heading: "Navigate Your Journeys with Precision",
        description: "Discover a range of tailored transportation solutions to suit your every need. Whether you're heading to the airport or a cruise port, embarking on a long-distance trip, attending a corporate event, or arranging transportation for college-related activities, our reliable services ensure you reach your destination safely, comfortably, and on time."
      },
      Services: [
        {
          id: 1,
          title: "Airport And Cruise Ports",
          image: "/img/Airport-Transfers.jpg"
        },
        {
          id: 2,
          title: "Long Distance Trips",
          image: "/img/Long-Distance-Charter-Bus.jpg"
        },
        {
          id: 3,
          title: "Corporate Events",
          image: "/img/Corporate-Event.jpg"
        },
        {
          id: 4,
          title: "College Transportation",
          image: "/img/ClemsonStudents.jpg"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BasicSection = __nuxt_component_0;
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_ParagraphDescription = __nuxt_component_2;
  const _component_CardDeckFourColumns = __nuxt_component_3;
  const _component_IndustryCard = __nuxt_component_4;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_BasicSection, { class: "container mx-auto mt-20 px-4 sm:px-8" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
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
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($data.IntroText.description)}`);
            } else {
              return [
                createTextVNode(toDisplayString($data.IntroText.description), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
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
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_CardDeckFourColumns, { class: "px-4 sm:px-8" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.Services, (Service) => {
          _push2(ssrRenderComponent(_component_IndustryCard, {
            key: Service.id,
            title: Service.title,
            image: Service.image
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.Services, (Service) => {
            return openBlock(), createBlock(_component_IndustryCard, {
              key: Service.id,
              title: Service.title,
              image: Service.image
            }, null, 8, ["title", "image"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/TransportationServicesSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TransportationServicesSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TransportationServicesSection as default
};
//# sourceMappingURL=TransportationServicesSection-DMCKrKxS.js.map
