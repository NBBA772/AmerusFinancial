import __nuxt_component_0 from './PatternSection-Bu0o2535.mjs';
import _sfc_main$1 from './RegisterForm-DrFF2uLd.mjs';
import { useSSRContext, withCtx, createVNode } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PatternSection = __nuxt_component_0;
  const _component_RegisterForm = _sfc_main$1;
  _push(ssrRenderComponent(_component_PatternSection, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_RegisterForm, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_RegisterForm)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { register as default };
//# sourceMappingURL=register-DUpmBBT4.mjs.map
