import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
const activeClass = "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-white text-foreground shadow-sm";
const inactiveClass = "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ResourceTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref("guides");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-5xl" }, _attrs))}><div role="tablist" class="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground bg-gray-300 grid w-full grid-cols-2 mb-8"><button type="button" class="${ssrRenderClass(tab.value === "guides" ? activeClass : inactiveClass)}"> Guides &amp; Forms </button><button type="button" class="${ssrRenderClass(tab.value === "blog" ? activeClass : inactiveClass)}"> Blog </button></div>`);
      if (tab.value === "guides") {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`);
        ssrRenderSlot(_ctx.$slots, "guides", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<div class="mt-2 space-y-6">`);
        ssrRenderSlot(_ctx.$slots, "blog", {}, null, _push, _parent);
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/resources/ResourceTabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ResourceTabs-DEQmcHu4.js.map
