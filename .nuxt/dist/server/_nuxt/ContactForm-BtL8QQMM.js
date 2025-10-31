import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtIcon = resolveComponent("NuxtIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-lg border bg-white text-gray-900 shadow-sm" }, _attrs))} data-v-d8eb2431><div class="p-6 md:p-8" data-v-d8eb2431><h2 class="text-2xl font-bold mb-6" data-v-d8eb2431>Send Us a Message</h2><form action="https://formsubmit.co/rudolfgiessen@amerusfinancial.com" method="POST" class="space-y-6" data-v-d8eb2431><input type="hidden" name="_subject" value="Contact Form Submission from Amerus Financial Website" data-v-d8eb2431><input type="hidden" name="_template" value="table" data-v-d8eb2431><input type="hidden" name="_autoresponse" value="Thank you for contacting Amerus Financial. A representative will reach out to you shortly." data-v-d8eb2431><input type="hidden" name="_next" value="/thank-you" data-v-d8eb2431><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-d8eb2431><div data-v-d8eb2431><label for="name" class="block text-sm font-medium mb-1" data-v-d8eb2431>Full Name</label><input id="name" name="name" placeholder="Your name" required class="input-field" data-v-d8eb2431></div><div data-v-d8eb2431><label for="email" class="block text-sm font-medium mb-1" data-v-d8eb2431>Email Address</label><input id="email" name="email" type="email" placeholder="Your email" required class="input-field" data-v-d8eb2431></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-d8eb2431><div data-v-d8eb2431><label for="phone" class="block text-sm font-medium mb-1" data-v-d8eb2431>Phone Number (Optional)</label><input id="phone" name="phone" placeholder="Your phone number" class="input-field" data-v-d8eb2431></div><div data-v-d8eb2431><label for="subject" class="block text-sm font-medium mb-1" data-v-d8eb2431>Subject</label><input id="subject" name="subject" placeholder="Message subject" required class="input-field" data-v-d8eb2431></div></div><div data-v-d8eb2431><label for="message" class="block text-sm font-medium mb-1" data-v-d8eb2431>Message</label><textarea id="message" name="message" placeholder="How can we help you?" required class="input-field min-h-[120px] resize-y" data-v-d8eb2431></textarea></div><button type="submit" class="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors px-4 py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto" data-v-d8eb2431>`);
  _push(ssrRenderComponent(_component_NuxtIcon, {
    name: "lucide:send",
    class: "h-4 w-4 mr-2"
  }, null, _parent));
  _push(` Send Message </button></form></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d8eb2431"]]);
export {
  ContactForm as default
};
//# sourceMappingURL=ContactForm-BtL8QQMM.js.map
