import { defineComponent, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactInfoCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    content: {},
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtIcon = resolveComponent("NuxtIcon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-lg border bg-card text-card-foreground shadow-sm" }, _attrs))}><div class="p-4 flex items-center"><div class="bg-primary/10 rounded-full p-3 mr-4">`);
      _push(ssrRenderComponent(_component_NuxtIcon, {
        name: _ctx.icon,
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><div><h3 class="font-bold">${ssrInterpolate(_ctx.title)}</h3><p class="text-gray-600">${_ctx.content}</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/ContactInfoCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ContactInfoCard-DiO5Bgx4.js.map
