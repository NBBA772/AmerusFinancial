import _sfc_main$1 from "./MultiStepForm-CmTdGKHp.js";
import { b as useRuntimeConfig } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  const _component_MultiStepForm = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-4 mb-8 md:block">`);
  _push(ssrRenderComponent(_component_MultiStepForm, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/HomePageQuoteForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_6 as default
};
//# sourceMappingURL=HomePageQuoteForm-CDFA9csT.js.map
