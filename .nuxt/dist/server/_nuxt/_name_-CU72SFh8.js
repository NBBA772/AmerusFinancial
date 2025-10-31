import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import { defineComponent, withAsyncContext, ref, withCtx, createVNode, unref, useSSRContext } from "vue";
import { h as useRoute, k as useFetch } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo_clear_fsj-CqZ_0o6B.js";
import { g as getParam } from "./getParam-DqNSwp4_.js";
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
const _imports_1 = "" + __publicAssetsURL("img/youtube_social_icon_red.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[name]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const topicName = getParam("name");
    const { data, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/topic/${topicName}`, { key: route.fullPath }, "$1Tfwpcipwg")), __temp = await __temp, __restore(), __temp);
    ref(null);
    ref(new HTMLElement());
    const activeVideo = ref((_a = data == null ? void 0 : data.value) == null ? void 0 : _a.videos[0]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><span class="absolute text-white text-4xl top-5 left-4 cursor-pointer" onclick="openSidebar()"><i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i></span><div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"><div class="text-gray-100 text-xl"><div class="p-2.5 mt-1 flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-20"${ssrRenderAttr("src", _imports_0)} alt="full stack jack logo"${_scopeId}><h1 class="font-bold text-gray-200 text-[15px] ml-3"${_scopeId}>Full Stack Jack</h1>`);
          } else {
            return [
              createVNode("img", {
                class: "h-20",
                src: _imports_0,
                alt: "full stack jack logo"
              }),
              createVNode("h1", { class: "font-bold text-gray-200 text-[15px] ml-3" }, "Full Stack Jack")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="my-2 bg-gray-600 h-[1px]"></div></div><div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"><i class="bi bi-search text-sm"></i><input type="text" placeholder="Search" class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"></div><div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"><i class="bi bi-house-door-fill"></i><span class="text-[15px] ml-4 text-gray-200 font-bold">Home</span></div><div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"><i class="bi bi-bookmark-fill"></i><span class="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span></div><div class="my-4 bg-gray-600 h-[1px]"></div><div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onclick="dropdown()"><i class="bi bi-chat-left-text-fill"></i><div class="flex justify-between w-full items-center"><span class="text-[15px] ml-4 text-gray-200 font-bold">Videos</span><span class="text-sm rotate-180" id="arrow"><i class="bi bi-chevron-down"></i></span></div></div><ul class="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu"><!--[-->`);
      ssrRenderList(unref(data).videos, (video) => {
        _push(`<li class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">${ssrInterpolate(video.title)}</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (!unref(pending) && unref(data)) {
        _push(`<div class="dark:bg-black min-h-screen"><div><section class="overflow-hidden text-gray-700 p-0"><div class="container px-0 py-2 mx-auto lg:pt-12 lg:px-32"><div class="flex flex-wrap -m-1 md:-m-2 xxxxx"><div class="mt-5"><div class="video__youtube container"${ssrRenderAttr("id", (_a2 = unref(activeVideo)) == null ? void 0 : _a2.host_id)}><img${ssrRenderAttr("src", "https://i.ytimg.com/vi/" + ((_b = unref(activeVideo)) == null ? void 0 : _b.host_id) + "/maxresdefault.jpg")} class="block object-cover object-center lg:rounded-lg w-full min-w-200 aspect-video mb-10 p-0" alt="video thumbnail"><img${ssrRenderAttr("src", _imports_1)} class="absolute text-5xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="youtube play button"></div></div></div></div></section></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/series/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_name_-CU72SFh8.js.map
