import { defineAsyncComponent, defineComponent, onErrorCaptured, createVNode } from "vue";
import { c as createError } from "../server.mjs";
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
import "vue/server-renderer";
import "cookie-es";
import "destr";
import "ohash";
const islandComponents = {
  "BrandedLogo": defineAsyncComponent(() => import(
    "./BrandedLogo-DJaHntjk.js"
    /* webpackChunkName: "components/branded-logo-server" */
  ).then((c) => c.default || c)),
  "Nuxt": defineAsyncComponent(() => import(
    "./Nuxt-DzArWBIO.js"
    /* webpackChunkName: "components/nuxt-server" */
  ).then((c) => c.default || c)),
  "NuxtSeo": defineAsyncComponent(() => import(
    "./NuxtSeo-DXmTuxro.js"
    /* webpackChunkName: "components/nuxt-seo-server" */
  ).then((c) => c.default || c)),
  "Pergel": defineAsyncComponent(() => import(
    "./Pergel-1vdfK46m.js"
    /* webpackChunkName: "components/pergel-server" */
  ).then((c) => c.default || c)),
  "SimpleBlog": defineAsyncComponent(() => import(
    "./SimpleBlog-CosilVqa.js"
    /* webpackChunkName: "components/simple-blog-server" */
  ).then((c) => c.default || c)),
  "UnJs": defineAsyncComponent(() => import(
    "./UnJs-C2T8pG7u.js"
    /* webpackChunkName: "components/un-js-server" */
  ).then((c) => c.default || c)),
  "Wave": defineAsyncComponent(() => import(
    "./Wave-DkmQ0nuL.js"
    /* webpackChunkName: "components/wave-server" */
  ).then((c) => c.default || c)),
  "WithEmoji": defineAsyncComponent(() => import(
    "./WithEmoji-CdhPpvLx.js"
    /* webpackChunkName: "components/with-emoji-server" */
  ).then((c) => c.default || c))
};
const islandRenderer = defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});
export {
  islandRenderer as default
};
//# sourceMappingURL=island-renderer-Dxgr1s9B.js.map
