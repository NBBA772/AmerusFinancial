import { _ as __nuxt_component_0 } from './nuxt-link-DuPix_nQ.mjs';
import _sfc_main$1 from './User-C37yjSaq.mjs';
import { u as useColorMode } from './composables-DGJynRPd.mjs';
import { g as useState, l as useLoggedIn } from '../server.mjs';
import { defineComponent, withAsyncContext, watch, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, useSSRContext } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import { ref } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js';
import { onClickOutside } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/ufo/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/hookable/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unctx/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/h3/dist/index.mjs';
import '../../index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/defu/dist/defu.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/klona/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/radix3/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/destr/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/ohash/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/scule/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/nitropack/dist/runtime/plugin.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/pathe/dist/index.mjs';
import '@prisma/client';
import 'crypto';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/shiki/dist/core.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unified/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/micromark/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/micromark-util-character/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/slugify/slugify.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/remark-parse/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/remark-rehype/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/hast-util-to-string/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/github-slugger/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/detab/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/remark-emoji/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/remark-gfm/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/rehype-external-links/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/rehype-raw/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/ipx/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconList",
  __ssrInlineRender: true,
  props: {
    isLoggedIn: Boolean
  },
  async setup(__props) {
    let __temp, __restore;
    const hideActions = ref(true);
    const userActions = ref(null);
    onClickOutside(userActions, () => hideActions.value = true);
    useColorMode();
    const user = useState("user");
    const initalCheck = ([__temp, __restore] = withAsyncContext(() => useLoggedIn()), __temp = await __temp, __restore(), __temp);
    const isLoggedIn = ref(initalCheck);
    async function checkIfLoggedIn() {
      const check = await useLoggedIn();
      isLoggedIn.value = check;
    }
    watch(
      user,
      async () => {
        await checkIfLoggedIn();
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_User = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden md:flex justify-between space-x-10 align-bottom mt-14" }, _attrs))}>`);
      if (unref(isLoggedIn)) {
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="dark:text-gray-50 h-6 w-6 lg:block hover:dark:text-blue-400 hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M9 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2m6 0h4c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2m6-13V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "dark:text-gray-50 h-6 w-6 lg:block hover:dark:text-blue-400 hover:text-blue-400",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "1em",
                  height: "1em",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    fill: "currentColor",
                    d: "M9 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2m6 0h4c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2m6-13V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="md:block">`);
      if (_ctx.$colorMode.value == "dark") {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-50 lg:block hover:dark:text-yellow-400 hover:text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$colorMode.value == "light") {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 lg:block hover:dark:text-yellow-400 hover:text-yellow-400" viewBox="0 0 20 20" fill="currentColor "><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
      _push(ssrRenderComponent(_component_User, {
        isLoggedIn: unref(isLoggedIn),
        class: "md:block"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/menu/IconList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=IconList-C4bkOunK.mjs.map
