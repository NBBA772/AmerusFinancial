import { useSSRContext, defineComponent, ref, computed, mergeProps } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import { useClipboard } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@vueuse/core/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseCode",
  __ssrInlineRender: true,
  props: {
    code: { default: "" },
    language: { default: null },
    filename: { default: null },
    highlights: { default: void 0 }
  },
  setup(__props) {
    useClipboard();
    const props = __props;
    const languageMap = {
      vue: {
        text: "vue",
        background: "#42b883",
        color: "white"
      },
      js: {
        text: "js",
        background: "#f7df1e",
        color: "black"
      }
    };
    const hasCopied = ref(false);
    computed(
      () => {
        var _a;
        return props.language ? (_a = languageMap[props.language]) == null ? void 0 : _a.text : null;
      }
    );
    computed(
      () => {
        var _a;
        return props.language ? (_a = languageMap[props.language]) == null ? void 0 : _a.background : null;
      }
    );
    computed(
      () => {
        var _a;
        return props.language ? (_a = languageMap[props.language]) == null ? void 0 : _a.color : null;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-115dcfde><div class="code-body" data-v-115dcfde>`);
      if (_ctx.filename) {
        _push(`<span class="filename-text mt-2" data-v-115dcfde>${ssrInterpolate(_ctx.filename)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-end mr-5" data-v-115dcfde><button class="w-6 h-6 text-white mb-2" data-v-115dcfde>`);
      if (!hasCopied.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="" data-v-115dcfde><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" data-v-115dcfde></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
      if (hasCopied.value) {
        _push(`<div class="text-white flex justify-end" data-v-115dcfde><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-115dcfde><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" data-v-115dcfde></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, "data-v-115dcfde-s");
      _push(`<div class="mt-10" data-v-115dcfde></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ProseCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-115dcfde"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=ProseCode-EwH7hRFM.mjs.map
