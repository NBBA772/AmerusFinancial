import { b as useRuntimeConfig } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
const _sfc_main = {
  props: {
    tag: {
      type: String,
      default: "newClient"
      // Default tag if not provided
    }
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      tags: []
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await this.createContact();
        this.resetForm();
        console.log("Form submitted successfully");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
    async createContact() {
      try {
        const config = useRuntimeConfig();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `${config.public.GHL_API_KEY}`);
        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phoneNumber,
          tags: [this.tag]
        };
        const raw = JSON.stringify(data);
        const response = await fetch(
          "https://rest.gohighlevel.com/v1/contacts/",
          {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
          }
        );
        if (!response.ok) {
          throw new Error("Failed to create contact");
        }
        const contact = await response.json();
        console.log("Created contact:", contact);
        return contact;
      } catch (error) {
        console.error("Error creating contact:", error);
        throw error;
      }
    },
    resetForm() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.phoneNumber = "";
      this.tags = [];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-4 mb-8 md:block"><form><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="relative mb-6 group"><label for="floating_first_name" class="block mb-1 text-sm font-medium text-gray-700 text-left">First Name:</label><input type="text"${ssrRenderAttr("value", $data.firstName)} id="floating_first_name" name="floating_first_name" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div><div class="relative mb-6 group"><label for="floating_last_name" class="block mb-1 text-sm font-medium text-gray-700 text-left">Last Name:</label><input type="text"${ssrRenderAttr("value", $data.lastName)} id="floating_last_name" name="floating_last_name" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div></div><div class="relative mb-6 group"><label for="email" class="block mb-1 text-sm font-medium text-gray-700 text-left">Email:</label><input type="email"${ssrRenderAttr("value", $data.email)} id="email" name="email" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div><div class="relative mb-6 group"><label for="phoneNumber" class="block mb-1 text-sm font-medium text-gray-700 text-left">Phone Number:</label><input type="tel"${ssrRenderAttr("value", $data.phoneNumber)} id="phoneNumber" name="phoneNumber" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div><button type="submit" class="block w-full py-2.5 px-5 text-sm text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Request Quote </button></form></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/IndividualFamilyHealthcareInsuranceQuoteForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=IndividualFamilyHealthcareInsuranceQuoteForm-BH4vQm2W.js.map
