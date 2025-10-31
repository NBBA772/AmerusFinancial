import __nuxt_component_0 from "./LegalText-Cgovoaot.js";
import { b as useRuntimeConfig } from "../server.mjs";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
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
      currentStep: 1,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      birthday: "",
      gender: "",
      tobaccoUse: "",
      anySeriousHealthConditions: "",
      anyChronicHealthConditions: "",
      coverageType: "",
      finalExpenses: "",
      mortgage: "",
      otherDebts: "",
      emergencyFund: "",
      educationFund: "",
      currentAnnualIncome: "",
      yearsIncomeNeeded: "",
      savingsAndInvestments: "",
      retirementSavings: "",
      otherAssets: "",
      currentLifeInsurance: "",
      needsSummary: 0
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.needsSummary = (parseFloat(this.finalExpenses) || 0) + (parseFloat(this.mortgage) || 0) + (parseFloat(this.otherDebts) || 0) + (parseFloat(this.emergencyFund) || 0) + (parseFloat(this.educationFund) || 0) - ((parseFloat(this.savingsAndInvestments) || 0) + (parseFloat(this.retirementSavings) || 0) + (parseFloat(this.otherAssets) || 0) + (parseFloat(this.currentLifeInsurance) || 0)) + (parseFloat(this.yearsIncomeNeeded) * parseFloat(this.currentAnnualIncome) || 0);
        const contact = await this.createContact();
        const contactId = await this.lookupContact();
        const noteData = {
          contactId,
          body: `Gender: ${this.gender}
Tobacco Use: ${this.tobaccoUse}
Any Serious Health Conditions: ${this.anySeriousHealthConditions}
Any Chronic Health Conditions: ${this.anyChronicHealthConditions}
Birthday: ${this.birthday}
Coverage Type: ${this.coverageType}
Final Expenses: ${this.finalExpenses}
Mortgage: ${this.mortgage}
Other Debts: ${this.otherDebts}
Emergency Fund: ${this.emergencyFund}
Education Fund: ${this.educationFund}
Current Annual Income: ${this.currentAnnualIncome}
Number of Years Income Needed: ${this.yearsIncomeNeeded}
Savings and Investments: ${this.savingsAndInvestments}
Retirement Savings: ${this.retirementSavings}
Other Assets: ${this.otherAssets}
Current Life Insurance: ${this.currentLifeInsurance}
Needs Summary: ${this.needsSummary}`
        };
        const noteResponse = await this.createNote(noteData);
        if (!noteResponse.ok) {
          throw new Error("Failed to create note");
        }
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
          address: this.address,
          city: this.city,
          state: this.state,
          zipCode: this.zipCode,
          birthday: this.birthday,
          gender: this.gender,
          tobaccoUse: this.tobaccoUse,
          anySeriousHealthConditions: this.anySeriousHealthConditions,
          anyChronicHealthConditions: this.anyChronicHealthConditions,
          tags: [this.tag]
          // Assuming this is a tag field
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
    async createNote(data) {
      try {
        const config = useRuntimeConfig();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `${config.public.GHL_API_KEY}`);
        const raw = JSON.stringify(data);
        console.log("data ", data);
        return await fetch(
          `https://rest.gohighlevel.com/v1/contacts/${data.contactId}/notes/`,
          {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
          }
        );
      } catch (error) {
        console.error("Error creating note:", error);
        throw error;
      }
    },
    async lookupContact() {
      const config = useRuntimeConfig();
      try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `${config.public.GHL_API_KEY}`);
        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };
        const response = await fetch(
          `https://rest.gohighlevel.com/v1/contacts/lookup?email=${this.email}&phone=${this.phoneNumber}`,
          requestOptions
        );
        if (!response.ok) {
          throw new Error("Failed to fetch contact data");
        }
        const data = await response.json();
        console.log("Lookup contact response:", data);
        const contacted = data.contacts[0];
        if (!contacted) {
          throw new Error("No contact found");
        }
        return contacted.id;
      } catch (error) {
        console.error("Error looking up contact:", error);
        throw error;
      }
    },
    resetForm() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.phoneNumber = "";
      this.address = "";
      this.city = "";
      this.state = "";
      this.zipCode = "";
      this.birthday = "";
      this.gender = "";
      this.tobaccoUse = "";
      this.anySeriousHealthConditions = "";
      this.anyChronicHealthConditions = "";
      this.coverageType = "";
      this.finalExpenses = "";
      this.mortgage = "";
      this.otherDebts = "";
      this.emergencyFund = "";
      this.educationFund = "";
      this.currentAnnualIncome = "";
      this.yearsIncomeNeeded = "";
      this.savingsAndInvestments = "";
      this.retirementSavings = "";
      this.otherAssets = "";
      this.currentLifeInsurance = "";
      this.needsSummary = "";
    },
    nextStep() {
      this.currentStep++;
    },
    prevStep() {
      this.currentStep--;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LegalText = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-4 mb-8 md:block"><form>`);
  if ($data.currentStep === 1) {
    _push(`<div><h2>Step 1: Personal Information</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="relative mb-6 group"><label for="floating_first_name" class="block mb-1 text-sm font-medium text-gray-700 text-left">First Name:</label><input type="text"${ssrRenderAttr("value", $data.firstName)} id="floating_first_name" name="floating_first_name" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div><div class="relative mb-6 group"><label for="floating_last_name" class="block mb-1 text-sm font-medium text-gray-700 text-left">Last Name:</label><input type="text"${ssrRenderAttr("value", $data.lastName)} id="floating_last_name" name="floating_last_name" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div><div class="relative mb-6 group"><label for="email" class="block mb-1 text-sm font-medium text-gray-700 text-left">Email:</label><input type="email"${ssrRenderAttr("value", $data.email)} id="email" name="email" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div><div class="relative mb-6 group"><label for="phoneNumber" class="block mb-1 text-sm font-medium text-gray-700 text-left">Phone Number:</label><input type="tel"${ssrRenderAttr("value", $data.phoneNumber)} id="phoneNumber" name="phoneNumber" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div><div class="relative mb-6 group"><label for="address" class="block mb-1 text-sm font-medium text-gray-700 text-left">Address:</label><input type="text"${ssrRenderAttr("value", $data.address)} id="address" name="address" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div><div class="relative mb-6 group"><label for="city" class="block mb-1 text-sm font-medium text-gray-700 text-left">City:</label><input type="text"${ssrRenderAttr("value", $data.city)} id="city" name="city" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div><div class="relative mb-6 group"><label for="state" class="block mb-1 text-sm font-medium text-gray-700 text-left">State:</label><input type="text"${ssrRenderAttr("value", $data.state)} id="state" name="state" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div><div class="relative mb-6 group"><label for="zipCode" class="block mb-1 text-sm font-medium text-gray-700 text-left">Zip Code:</label><input type="text"${ssrRenderAttr("value", $data.zipCode)} id="zipCode" name="zipCode" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div></div><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pagination-button"${ssrIncludeBooleanAttr($data.currentStep === 4) ? " disabled" : ""}> Next </button></div>`);
  } else if ($data.currentStep === 2) {
    _push(`<div><h2>Step 2: Additional Information</h2><div class="relative mb-6 group"><label for="birthday" class="block mb-1 text-sm font-medium text-gray-700 text-left">Date of Birth:</label><input type="date"${ssrRenderAttr("value", $data.birthday)} id="birthday" name="birthday" class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder=" " required></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Gender:</label><div class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.gender, "male")) ? " checked" : ""} value="male" id="male" name="gender" class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"><label for="male" class="text-sm text-gray-700">Male</label></div><div class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.gender, "female")) ? " checked" : ""} value="female" id="female" name="gender" class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"><label for="female" class="text-sm text-gray-700">Female</label></div></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Tobacco Use:</label><div class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.tobaccoUse, "yes")) ? " checked" : ""} value="yes" id="tobaccoYes" name="tobaccoUse" class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"><label for="tobaccoYes" class="text-sm text-gray-700">Yes</label></div><div class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.tobaccoUse, "no")) ? " checked" : ""} value="no" id="tobaccoNo" name="tobaccoUse" class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"><label for="tobaccoNo" class="text-sm text-gray-700">No</label></div></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Any Serious Health Conditions:</label><div class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.anySeriousHealthConditions, "yes")) ? " checked" : ""} value="yes" id="seriousYes" name="anySeriousHealthConditions" class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"><label for="seriousYes" class="text-sm text-gray-700">Yes</label></div><div class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.anySeriousHealthConditions, "no")) ? " checked" : ""} value="no" id="seriousNo" name="anySeriousHealthConditions" class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"><label for="seriousNo" class="text-sm text-gray-700">No</label></div></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Any Chronic Health Conditions:</label><div class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.anyChronicHealthConditions, "yes")) ? " checked" : ""} value="yes" id="chronicYes" name="anyChronicHealthConditions " class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"><label for="chronicYes" class="text-sm text-gray-700">Yes</label></div><div class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.anyChronicHealthConditions, "no")) ? " checked" : ""} value="no" id="chronicNo" name="anyChronicHealthConditions " class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"><label for="chronicNo" class="text-sm text-gray-700">No</label></div></div><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 pagination-button"${ssrIncludeBooleanAttr($data.currentStep === 1) ? " disabled" : ""}> Previous </button><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pagination-button"${ssrIncludeBooleanAttr($data.currentStep === 4) ? " disabled" : ""}> Next </button></div>`);
  } else if ($data.currentStep === 3) {
    _push(`<div><h2>Step 3: Coverage Type</h2><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Coverage Type:</label><select id="coverageType" name="coverageType" class="form-select block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" required><option value=""${ssrIncludeBooleanAttr(Array.isArray($data.coverageType) ? ssrLooseContain($data.coverageType, "") : ssrLooseEqual($data.coverageType, "")) ? " selected" : ""}>Select One</option><option value="Whole Life"${ssrIncludeBooleanAttr(Array.isArray($data.coverageType) ? ssrLooseContain($data.coverageType, "Whole Life") : ssrLooseEqual($data.coverageType, "Whole Life")) ? " selected" : ""}>Whole Life</option><option value="Term Life"${ssrIncludeBooleanAttr(Array.isArray($data.coverageType) ? ssrLooseContain($data.coverageType, "Term Life") : ssrLooseEqual($data.coverageType, "Term Life")) ? " selected" : ""}>Term Life</option><option value="Universal Life"${ssrIncludeBooleanAttr(Array.isArray($data.coverageType) ? ssrLooseContain($data.coverageType, "Universal Life") : ssrLooseEqual($data.coverageType, "Universal Life")) ? " selected" : ""}>Universal Life</option><option value="I Dont Know"${ssrIncludeBooleanAttr(Array.isArray($data.coverageType) ? ssrLooseContain($data.coverageType, "I Dont Know") : ssrLooseEqual($data.coverageType, "I Dont Know")) ? " selected" : ""}>I Dont Know</option></select></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Final Expenses:</label><input type="number"${ssrRenderAttr("value", $data.finalExpenses)} id="finalExpenses" name="finalExpenses" class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" required></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Mortgage:</label><input type="number"${ssrRenderAttr("value", $data.mortgage)} id="mortgage" name="mortgage" class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" required></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Other Debts:</label><input type="number"${ssrRenderAttr("value", $data.otherDebts)} id="otherDebts" name="otherDebts" class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" required></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Emergency Fund:</label><input type="number"${ssrRenderAttr("value", $data.emergencyFund)} id="emergencyFund" name="emergencyFund" class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" required></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Education Fund:</label><input type="number"${ssrRenderAttr("value", $data.educationFund)} id="educationFund" name="educationFund" class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" required></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Current Annual Income:</label><input type="number"${ssrRenderAttr("value", $data.currentAnnualIncome)} id="currentAnnualIncome" name="currentAnnualIncome" class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" required></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Number of Years Income Needed:</label><input type="number"${ssrRenderAttr("value", $data.yearsIncomeNeeded)} id="yearsIncomeNeeded" name="yearsIncomeNeeded" class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" required></div><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 pagination-button"${ssrIncludeBooleanAttr($data.currentStep === 1) ? " disabled" : ""}> Previous </button><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pagination-button"${ssrIncludeBooleanAttr($data.currentStep === 4) ? " disabled" : ""}> Next </button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.currentStep === 4) {
    _push(`<div><h2>Step 4: Assets</h2><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Savings and Investments:</label><input type="number"${ssrRenderAttr("value", $data.savingsAndInvestments)} id="savingsAndInvestments" name="savingsAndInvestments" class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" required></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Retirement Savings:</label><input type="number"${ssrRenderAttr("value", $data.retirementSavings)} id="retirementSavings" name="retirementSavings" class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" required></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Other Assets:</label><input type="number"${ssrRenderAttr("value", $data.otherAssets)} id="otherAssets" name="otherAssets" class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" required></div><div class="relative mb-6 group"><label class="block mb-1 text-sm font-medium text-gray-700 text-left">Current Life Insurance:</label><input type="number"${ssrRenderAttr("value", $data.currentLifeInsurance)} id="currentLifeInsurance" name="currentLifeInsurance" class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" required></div><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 pagination-button"${ssrIncludeBooleanAttr($data.currentStep === 1) ? " disabled" : ""}> Previous </button><button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline pagination-button"> Submit </button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form>`);
  _push(ssrRenderComponent(_component_LegalText, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`By clicking the button and submitting this form, I agree that I am 18+ years old and I provide my signature expressly consenting to receive emails, calls, postal mail, text messages and other forms of communication regarding Health Insurance, or other offers from these companies and agents to the number(s) I provided, including a mobile phone, even if I am on a state or federal Do Not Call and/or Do Not Email registry. The list of companies participating are subject to change. You will receive calls from a maximum of eight providers. Such calls and text messages may use automated telephone dialing systems, artificial or pre-recorded voices. I understand my wireless carrier may impose charges for calls or texts. I understand that my consent to receive communications is not a condition of purchase and I may revoke my consent at any time.By using this site, you acknowledge that you have read and agree to the Privacy Policy.`);
      } else {
        return [
          createTextVNode("By clicking the button and submitting this form, I agree that I am 18+ years old and I provide my signature expressly consenting to receive emails, calls, postal mail, text messages and other forms of communication regarding Health Insurance, or other offers from these companies and agents to the number(s) I provided, including a mobile phone, even if I am on a state or federal Do Not Call and/or Do Not Email registry. The list of companies participating are subject to change. You will receive calls from a maximum of eight providers. Such calls and text messages may use automated telephone dialing systems, artificial or pre-recorded voices. I understand my wireless carrier may impose charges for calls or texts. I understand that my consent to receive communications is not a condition of purchase and I may revoke my consent at any time.By using this site, you acknowledge that you have read and agree to the Privacy Policy.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/IndividualFamilyLifeInsuranceQuoteForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_4 as default
};
//# sourceMappingURL=IndividualFamilyLifeInsuranceQuoteForm-D96CaX1r.js.map
