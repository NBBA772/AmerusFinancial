import { f as useNuxtApp, g as useState } from "../server.mjs";
import { defineComponent, ref, computed, watch, withAsyncContext, unref, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { klona } from "klona";
import "hookable";
import { defuFn } from "defu";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { Icon } from "@iconify/vue/dist/offline";
import { loadIcon } from "@iconify/vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
import "devalue";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
const inlineConfig = {
  "nuxt": {
    "buildId": "dev"
  }
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const nuxtApp = useNuxtApp();
    const nuxtIcon = useAppConfig().nuxtIcon;
    const props = __props;
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => ((nuxtIcon == null ? void 0 : nuxtIcon.aliases) || {})[props.name] || props.name);
    const icon = computed(() => {
      var _a;
      return (_a = state.value) == null ? void 0 : _a[iconName.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      const size = props.size || (nuxtIcon == null ? void 0 : nuxtIcon.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    async function loadIconComponent() {
      var _a;
      if (component.value) {
        return;
      }
      if (!((_a = state.value) == null ? void 0 : _a[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isFetching)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: "icon",
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs))} data-v-ca945699></span>`);
      } else if (unref(icon)) {
        _push(ssrRenderComponent(unref(Icon), mergeProps({
          icon: unref(icon),
          class: "icon",
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null, _parent));
      } else if (unref(component)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
          class: "icon",
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: "icon",
          style: { fontSize: unref(sSize), lineHeight: unref(sSize), width: unref(sSize), height: unref(sSize) }
        }, _attrs))} data-v-ca945699>${ssrInterpolate(__props.name)}</span>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca945699"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Icon-6AEq6jga.js.map
