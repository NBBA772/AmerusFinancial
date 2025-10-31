import { defineComponent, reactive, unref, useSSRContext } from "vue";
import { g as useState } from "../server.mjs";
import "hookable";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnswerForm",
  __ssrInlineRender: true,
  props: ["questionId"],
  emits: ["addAnswer"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const questionId = props.questionId;
    const data = reactive({
      text: "",
      questionId: parseInt(questionId)
    });
    useState("showAnswerForm" + questionId, "$wOx2MQP4jn");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Answer</label><textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Be specific and kind">${ssrInterpolate(unref(data).text)}</textarea><div></div><div class="flex justify-end"><button type="submit" class="mt-5 px-6 py-3.5 text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Submit </button><button type="button" class="mt-5 px-6 py-3.5 text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Cancel </button></div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/AnswerForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=AnswerForm-CojWl8WY.js.map
