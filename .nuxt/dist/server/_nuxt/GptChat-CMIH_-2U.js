import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  data() {
    return {
      messages: [
        { id: 1, text: "Hello!", sender: "user" },
        { id: 2, text: "Hi there!", sender: "system" }
      ],
      newMessage: ""
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === "")
        return;
      this.messages.push({
        id: this.messages.length + 1,
        text: this.newMessage,
        sender: "user"
      });
      this.newMessage = "";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full p-4 mx-auto my-8" }, _attrs))} data-v-ab744c0b><div class="bg-gray-300 dark:bg-gray-600 p-8 my-8" data-v-ab744c0b><!--[-->`);
  ssrRenderList($data.messages, (message) => {
    _push(`<div class="mb-4" data-v-ab744c0b>`);
    if (message.sender === "user") {
      _push(`<div class="text-right" data-v-ab744c0b><span class="bg-blue-500 text-white p-2 rounded-lg" data-v-ab744c0b>${ssrInterpolate(message.text)}</span></div>`);
    } else {
      _push(`<div data-v-ab744c0b><span class="bg-gray-300 text-white p-2 rounded-lg" data-v-ab744c0b>${ssrInterpolate(message.text)}</span></div>`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="flex" data-v-ab744c0b><input${ssrRenderAttr("value", $data.newMessage)} type="text" class="flex-1 p-2 bg-gray-300 dark:bg-gray-600" placeholder="Type your response..." data-v-ab744c0b><button class="ml-2 p-2 bg-blue-500 text-white rounded" data-v-ab744c0b> Send </button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GptChat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ab744c0b"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=GptChat-CMIH_-2U.js.map
