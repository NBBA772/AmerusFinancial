import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import { defineComponent, ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { k as useFetch } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$1 from "./Tiptap-DruRXd19.js";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "defu";
import "klona";
import "devalue";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
import "@tiptap/vue-3";
import "@tiptap/starter-kit";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QuestionBoard",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const searchInput = ref("");
    const {
      data: questions,
      pending,
      refresh,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `/api/dashboard/search?search=${searchInput.value}`,
      { server: false },
      "$H4Lrowmpqc"
    )), __temp = await __temp, __restore(), __temp);
    refresh();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div><div class="flex m-5"><label for="search-dropdown" class="mb-2 text-sm font-medium text-slate-900 sr-only dark:text-gray-300">Search Questions</label><div class="relative w-full"><input${ssrRenderAttr("value", unref(searchInput))} type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-slate-900 bg-slate-50 rounded-lg border-solid border-2 border-indigo-600 dark:bg-gray-900 dark:text-gray-300" placeholder="Search Questions..."><button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium dark:text-white"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></div></div></div>`);
      if (!unref(pending)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(questions), (question) => {
          if (question) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              class: "flex flex-column justify-cente tranition duration-500",
              to: `/dashboard/question/${question.id}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="w-full p-4"${_scopeId}><div class="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md"${_scopeId}><div class="flex justify-end dark:text-gray-300"${_scopeId}>${ssrInterpolate(question.authName)}</div>`);
                  _push2(ssrRenderComponent(_sfc_main$1, {
                    modelValue: question.description,
                    "onUpdate:modelValue": ($event) => question.description = $event,
                    label: "",
                    editable: false
                  }, null, _parent2, _scopeId));
                  _push2(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full p-4" }, [
                      createVNode("div", { class: "p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md" }, [
                        createVNode("div", { class: "flex justify-end dark:text-gray-300" }, toDisplayString(question.authName), 1),
                        createVNode(_sfc_main$1, {
                          modelValue: question.description,
                          "onUpdate:modelValue": ($event) => question.description = $event,
                          label: "",
                          editable: false
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/QuestionBoard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=QuestionBoard-fp4swFys.js.map
