import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import { g as getParam } from "./getParam-DqNSwp4_.js";
import { m as useUser, a as useRouter, h as useRoute, l as useLoggedIn, k as useFetch, g as useState } from "../server.mjs";
import { defineComponent, withAsyncContext, ref, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import _sfc_main$1 from "./DashboardSidebar-EIdgUDKR.js";
import _sfc_main$4 from "./AnswerForm-CojWl8WY.js";
import _sfc_main$3 from "./QuestionForm-Mq32X9mT.js";
import _sfc_main$2 from "./Tiptap-DruRXd19.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "h3";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
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
import "./nuxt-link-DuPix_nQ.js";
import "./Icon-6AEq6jga.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "@tiptap/vue-3";
import "@tiptap/starter-kit";
const editEndpoint = "/api/dashboard/edit-question";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const questionId = getParam("id");
    const me = ([__temp, __restore] = withAsyncContext(() => useUser()), __temp = await __temp, __restore(), __temp);
    const router = useRouter();
    const route = useRoute();
    const showEditForm = ref(false);
    const showDeleted = ref(false);
    ref(false);
    let isAdmin = true;
    const isLoggedIn = ([__temp, __restore] = withAsyncContext(() => useLoggedIn()), __temp = await __temp, __restore(), __temp);
    const { data: question } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/dashboard/question?id=${questionId}`,
      { key: route.fullPath },
      "$te9asCt6WP"
    )), __temp = await __temp, __restore(), __temp);
    const showAnswerForm = useState("showAnswerForm" + questionId, () => false);
    const isMine = ((_a = question == null ? void 0 : question.value) == null ? void 0 : _a.authorId) == (me == null ? void 0 : me.id);
    if ((me == null ? void 0 : me.id) === 1) {
      isAdmin = true;
    } else {
      isAdmin = false;
    }
    async function deleteQuestion() {
      await useFetch("/api/dashboard/delete-question", {
        method: "POST",
        body: { questionId }
      }, "$l240gTkide");
      showDeleted.value = true;
      setTimeout(() => {
        router.push("/dashboard/search");
      });
    }
    function addAnswer(answer) {
      var _a2;
      console.log("&&&&&&&&& add answer");
      (_a2 = question.value) == null ? void 0 : _a2.answers.push(answer);
      showAnswerForm.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PatternSection = __nuxt_component_0;
      _push(ssrRenderComponent(_component_PatternSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<div class="h-32 flex justify-center"${_scopeId}><div class="flex m-5"${_scopeId}><h1 class="py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400 ml-4"${_scopeId}> Questions </h1></div></div><div class="md:flex min-h-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`<div class="w-full z-1 justify-right relative"${_scopeId}>`);
            if (unref(showDeleted)) {
              _push2(`<div class="p-8 text-white bg-lime-600 dark:bg-black rounded shadow-md"${_scopeId}> question deleted </div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(question)) {
              _push2(`<div class="flex w-full flex-column justify-center transition duration-500"${_scopeId}><div class="w-full p-4"${_scopeId}><div class="p-8 bg-white dark:bg-gray-800 rounded shadow-md"${_scopeId}><div class="flex justify-end dark:text-gray-300"${_scopeId}>${ssrInterpolate(unref(question).authName)}</div><h2 class="text-2xl font-bold text-gray-800 dark:text-gray-300"${_scopeId}>${ssrInterpolate(unref(question).title)}</h2>`);
              if (!unref(showEditForm)) {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  modelValue: unref(question).description,
                  "onUpdate:modelValue": ($event) => unref(question).description = $event,
                  label: "",
                  editable: false
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (isMine && unref(showEditForm) == false) {
                _push2(`<div class="mt-5"${_scopeId}><button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"${_scopeId}> Edit </button><button class="bg-red-500 ml-3 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"${_scopeId}> delete </button></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(showEditForm)) {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  endpoint: editEndpoint,
                  data: unref(question)
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList((_a2 = unref(question)) == null ? void 0 : _a2.answers, (answer) => {
              _push2(`<div class="flex flex-column justify-center hover:scale-110 transition duration-500"${_scopeId}><div class="max-w-xxl w-full p-4"${_scopeId}><div class="p-8 bg-white dark:bg-slate-900 rounded shadow-md"${_scopeId}><div class="flex justify-end dark:text-gray-300"${_scopeId}>${ssrInterpolate(answer.authorName)}</div><p class="dark:text-gray-300"${_scopeId}>${ssrInterpolate(answer.text)}</p></div></div></div>`);
            });
            _push2(`<!--]--><div class="flex justify-end"${_scopeId}>`);
            if (!unref(showAnswerForm) && unref(isLoggedIn) && unref(isAdmin)) {
              _push2(`<button type="button" class="dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mr-2 mb-2"${_scopeId}> Answer </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(showAnswerForm)) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                questionId: unref(questionId),
                onAddAnswer: addAnswer
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-32 flex justify-center" }, [
                createVNode("div", { class: "flex m-5" }, [
                  createVNode("h1", { class: "py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400 ml-4" }, " Questions ")
                ])
              ]),
              createVNode("div", { class: "md:flex min-h-full" }, [
                createVNode(_sfc_main$1),
                createVNode("div", { class: "w-full z-1 justify-right relative" }, [
                  unref(showDeleted) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "p-8 text-white bg-lime-600 dark:bg-black rounded shadow-md"
                  }, " question deleted ")) : createCommentVNode("", true),
                  unref(question) ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex w-full flex-column justify-center transition duration-500"
                  }, [
                    createVNode("div", { class: "w-full p-4" }, [
                      createVNode("div", { class: "p-8 bg-white dark:bg-gray-800 rounded shadow-md" }, [
                        createVNode("div", { class: "flex justify-end dark:text-gray-300" }, toDisplayString(unref(question).authName), 1),
                        createVNode("h2", { class: "text-2xl font-bold text-gray-800 dark:text-gray-300" }, toDisplayString(unref(question).title), 1),
                        !unref(showEditForm) ? (openBlock(), createBlock(_sfc_main$2, {
                          key: 0,
                          modelValue: unref(question).description,
                          "onUpdate:modelValue": ($event) => unref(question).description = $event,
                          label: "",
                          editable: false
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                        isMine && unref(showEditForm) == false ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "mt-5"
                        }, [
                          createVNode("button", {
                            onClick: ($event) => showEditForm.value = true,
                            class: "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                          }, " Edit ", 8, ["onClick"]),
                          createVNode("button", {
                            onClick: deleteQuestion,
                            class: "bg-red-500 ml-3 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                          }, " delete ")
                        ])) : createCommentVNode("", true),
                        unref(showEditForm) ? (openBlock(), createBlock(_sfc_main$3, {
                          key: 2,
                          endpoint: editEndpoint,
                          data: unref(question)
                        }, null, 8, ["data"])) : createCommentVNode("", true)
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(question)) == null ? void 0 : _b.answers, (answer) => {
                    return openBlock(), createBlock("div", {
                      key: answer.id,
                      class: "flex flex-column justify-center hover:scale-110 transition duration-500"
                    }, [
                      createVNode("div", { class: "max-w-xxl w-full p-4" }, [
                        createVNode("div", { class: "p-8 bg-white dark:bg-slate-900 rounded shadow-md" }, [
                          createVNode("div", { class: "flex justify-end dark:text-gray-300" }, toDisplayString(answer.authorName), 1),
                          createVNode("p", { class: "dark:text-gray-300" }, toDisplayString(answer.text), 1)
                        ])
                      ])
                    ]);
                  }), 128)),
                  createVNode("div", { class: "flex justify-end" }, [
                    !unref(showAnswerForm) && unref(isLoggedIn) && unref(isAdmin) ? (openBlock(), createBlock("button", {
                      key: 0,
                      onClick: ($event) => showAnswerForm.value = !unref(showAnswerForm),
                      type: "button",
                      class: "dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mr-2 mb-2"
                    }, " Answer ", 8, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  unref(showAnswerForm) ? (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode(_sfc_main$4, {
                      questionId: unref(questionId),
                      onAddAnswer: addAnswer
                    }, null, 8, ["questionId"])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/question/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-1e5qiMk2.js.map
