import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { a as useRouter } from "../server.mjs";
import "hookable";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=QuestionForm-Mq32X9mT.js.map
