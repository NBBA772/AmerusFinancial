import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import { ref } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RegisterForm",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    const firstName = ref("");
    const lastName = ref("");
    const username = ref("");
    const phone = ref("");
    const errors = ref(
      /* @__PURE__ */ new Map()
    );
    let response;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center px-4 sm:px-6 lg:px-8" }, _attrs))}><div class="max-w-md w-full"><div><h2 class="text-center text-3xl font-extrabold mt-5 text-gray-900 dark:text-white"> Sign Up </h2></div>`);
      if (((_a = unref(response)) == null ? void 0 : _a.hasErrors) && unref(errors)) {
        _push(`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert"><ul class="block sm:inline"><!--[-->`);
        ssrRenderList(unref(errors), ([key, value]) => {
          _push(`<li>${ssrInterpolate(value.message)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="mt-8 space-y-6" action="#" method="POST"><input type="hidden" name="remember" value="true"><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="firstName" class="sr-only">First Name</label><input${ssrRenderAttr("value", unref(firstName))} id="firstName" name="firstName" required class="${ssrRenderClass([((_b = unref(errors)) == null ? void 0 : _b.has("firstName")) ? " border-red-500" : "", "appearance-none dark:bg-slate-500 dark:text-white dark:placeholder-white rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"])}" placeholder="First Name"></div></div><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="lastName" class="sr-only">Last Name</label><input${ssrRenderAttr("value", unref(lastName))} id="lastName" name="lastName" required class="${ssrRenderClass([((_c = unref(errors)) == null ? void 0 : _c.has("lastName")) ? " border-red-500" : "", "appearance-none dark:bg-slate-500 dark:text-white dark:placeholder-white rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"])}" placeholder="Last Name"></div></div><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="phone" class="sr-only">Phone</label><input type="phone"${ssrRenderAttr("value", unref(phone))} id="phone" name="phone" required class="${ssrRenderClass([((_d = unref(errors)) == null ? void 0 : _d.has("phone")) ? " border-red-500" : "", "dark:bg-slate-500 dark:text-white dark:placeholder-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"])}" placeholder="phone"></div></div><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="email-address" class="sr-only">Username</label><input type="email"${ssrRenderAttr("value", unref(username))} id="username" name="username" required class="${ssrRenderClass([((_e = unref(errors)) == null ? void 0 : _e.has("username")) ? " border-red-500" : "", "dark:bg-slate-500 dark:text-white dark:placeholder-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"])}" placeholder="username"></div></div><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="email-address" class="sr-only">Email address</label><input${ssrRenderAttr("value", unref(email))} id="email-address" name="email" type="email" autocomplete="email" required class="${ssrRenderClass([((_f = unref(errors)) == null ? void 0 : _f.has("email")) ? " border-red-500" : "", "dark:bg-slate-500 dark:text-white dark:placeholder-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"])}" placeholder="Email address"></div></div><div><label for="password" class="sr-only">Password</label><input${ssrRenderAttr("value", unref(password))} id="password" name="password" type="password" autocomplete="current-password" required class="${ssrRenderClass([((_g = unref(errors)) == null ? void 0 : _g.has("password")) ? " border-red-500" : "", "dark:bg-slate-500 dark:text-white dark:placeholder-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"])}" placeholder="Password"></div><div></div></form><button class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><span class="absolute left-0 inset-y-0 flex items-center pl-3"><svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></span> Register </button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/cards/RegisterForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=RegisterForm-DrFF2uLd.mjs.map
