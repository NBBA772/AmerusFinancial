import { defineComponent, withAsyncContext, unref, useSSRContext } from "vue";
import { ssrInterpolate } from "vue/server-renderer";
import { b as useRuntimeConfig } from "../server.mjs";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=PipelineHeader-_KSK-ne6.js.map
