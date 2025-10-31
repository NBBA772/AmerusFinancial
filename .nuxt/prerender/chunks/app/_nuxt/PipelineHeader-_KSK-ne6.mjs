import { defineComponent, withAsyncContext, unref, useSSRContext } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrInterpolate } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import { b as useRuntimeConfig } from '../server.mjs';
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

async function getGHLPipelines() {
  const config = useRuntimeConfig();
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `${config.public.GHL_API_KEY}`);
  var requestOptions = {
    method: "GET",
    headers: myHeaders
  };
  return fetch("https://rest.gohighlevel.com/v1/pipelines/", requestOptions).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  }).then((result) => {
    console.log(result);
    return result;
  }).catch((error) => {
    console.log("Error:", error);
    throw error;
  });
}
async function getGHLOpportunities(pipelineId, stageId) {
  const config = useRuntimeConfig();
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `${config.public.GHL_API_KEY}`);
  var requestOptions = {
    method: "GET",
    headers: myHeaders
  };
  return fetch(`https://rest.gohighlevel.com/v1/pipelines/${pipelineId}/opportunities/?stageId=${stageId}`, requestOptions).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  }).then((result) => {
    console.log(result);
    return result;
  }).catch((error) => {
    console.log("Error:", error);
    throw error;
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PipelineHeader",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const pipelines = ([__temp, __restore] = withAsyncContext(() => getGHLPipelines()), __temp = await __temp, __restore(), __temp);
    console.log(pipelines.pipelines[1].stages[0].id);
    const newClientOpportunities = ([__temp, __restore] = withAsyncContext(() => getGHLOpportunities(
      pipelines.pipelines[1].id,
      pipelines.pipelines[1].stages[0].id
    )), __temp = await __temp, __restore(), __temp);
    const newFrequentlyAskedQuestionsOpportunities = ([__temp, __restore] = withAsyncContext(() => getGHLOpportunities(
      pipelines.pipelines[0].id,
      pipelines.pipelines[0].stages[0].id
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="p-2 m-2"><h3 class="text-3xl">${ssrInterpolate(unref(pipelines).pipelines[1].name)}</h3><p class="text-2xl">${ssrInterpolate(unref(newClientOpportunities).meta.total)}</p><p>${ssrInterpolate(unref(newClientOpportunities).opportunities[0].contact.name)}</p><p>${ssrInterpolate(unref(newClientOpportunities).opportunities[0].contact.phone)}</p><p>${ssrInterpolate(unref(newClientOpportunities).opportunities[0].contact.email)}</p><p>${ssrInterpolate(unref(newClientOpportunities).opportunities[0].status)}</p><p>${ssrInterpolate(unref(newClientOpportunities).opportunities[0].contact.tags[0])}</p></div><div class="p-2 m-2"><h3 class="text-3xl">${ssrInterpolate(unref(pipelines).pipelines[0].name)}</h3><p class="text-2xl">${ssrInterpolate(unref(newFrequentlyAskedQuestionsOpportunities).meta.total)}</p><p>${ssrInterpolate(unref(newFrequentlyAskedQuestionsOpportunities).opportunities[0].contact.name)}</p><p>${ssrInterpolate(unref(newFrequentlyAskedQuestionsOpportunities).opportunities[0].contact.phone)}</p><p>${ssrInterpolate(unref(newFrequentlyAskedQuestionsOpportunities).opportunities[0].contact.email)}</p><p>${ssrInterpolate(unref(newFrequentlyAskedQuestionsOpportunities).opportunities[0].status)}</p><p>${ssrInterpolate(unref(newFrequentlyAskedQuestionsOpportunities).opportunities[0].contact.tags[0])}</p></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/PipelineHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PipelineHeader-_KSK-ne6.mjs.map
