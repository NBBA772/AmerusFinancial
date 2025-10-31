import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { a as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/hookable/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unctx/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/h3/dist/index.mjs';
import '../../index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/ufo/dist/index.mjs';
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
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@vueuse/core/index.mjs';
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
  __name: "QuestionForm",
  __ssrInlineRender: true,
  props: {
    data: {},
    endpoint: {}
  },
  setup(__props) {
    const props = __props;
    const data = props.data;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div class="mb-6"><label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Short Description </label><input${ssrRenderAttr("value", unref(data).title)} type="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Short description"></div><label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Question</label><textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Be specific and kind">${ssrInterpolate(unref(data).description)}</textarea><div class="flex justify-center sm:justify-end"><button type="button" class="mt-5 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mr-2 mb-2"> Ask Question </button></div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/QuestionForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=QuestionForm-Mq32X9mT.mjs.map
