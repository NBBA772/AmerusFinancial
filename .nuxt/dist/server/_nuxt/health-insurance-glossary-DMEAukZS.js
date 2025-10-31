import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./HomepageHeroSection-uUHQMeWN.js";
import __nuxt_component_0$1 from "./Icon-6AEq6jga.js";
import _sfc_main$1 from "./GlossaryTermCard-Ds0Jj88c.js";
import __nuxt_component_4 from "./AccordionItem-B3geeABW.js";
import __nuxt_component_5 from "./StillHaveQuestions-BBDjaHJm.js";
import _sfc_main$2 from "./CallToAction-CmwVfqHS.js";
import { defineComponent, ref, computed, withCtx, createVNode, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SectionContainer-CRG4W3qY.js";
import "./GridTwoColumns-CDZGjEfF.js";
import "./ParagraphSubHeadingHero-CqCgEloW.js";
import "./HeadlineOneHero-B_BgiMME.js";
import "./ParagraphDescriptionHero-BUKcd6HV.js";
import "./ContactButtons-DUFZbfzJ.js";
import "./nuxt-link-DuPix_nQ.js";
import "ufo";
import "../server.mjs";
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
import "./HomePageQuoteForm-CDFA9csT.js";
import "./MultiStepForm-CmTdGKHp.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "health-insurance-glossary",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const terms = {
      A: [
        { term: "Affordable Care Act (ACA)", definition: "A comprehensive healthcare reform law enacted in March 2010, also known as 'Obamacare.' The law aims to make health insurance more affordable and accessible for all Americans while improving the quality of healthcare and health insurance. " },
        { term: "Annual Limit", definition: "A cap on the benefits your insurance company will pay in a year. These caps may be placed on particular services such as prescriptions or hospitalizations." }
      ],
      C: [
        { term: "Coinsurance", definition: "Your share of the costs of a covered healthcare service, calculated as a percentage (for example, 20%) of the allowed amount for the service." },
        { term: "Copayment (Copay)", definition: "A fixed amount (for example, $15) you pay for a covered healthcare service, usually when you receive the service." },
        { term: "Covered Services", definition: "Healthcare services that your health insurance plan has agreed to pay for, as outlined in your policy documents." }
      ],
      D: [
        { term: "Deductible", definition: "The amount you pay for covered healthcare services before your insurance plan starts to pay. For example, with a $2,000 deductible, you pay the first $2,000 of covered services yourself." },
        { term: "Dependent", definition: "A person who relies on another person for support, like a spouse or child, and is covered under that person's health insurance plan." }
      ],
      E: [
        { term: "Effective Date", definition: "The date your insurance coverage begins." },
        { term: "Exclusions", definition: "Specific conditions, treatments, or services that your health insurance plan will not cover." }
      ],
      H: [
        { term: "Health Insurance Exchange (Marketplace)", definition: "A state or federal platform where individuals, families, and small businesses can shop for and purchase health insurance coverage, and potentially qualify for subsidies." },
        { term: "Health Maintenance Organization (HMO)", definition: "A type of health insurance plan that typically limits coverage to care from doctors who work for or contract with the HMO. Generally, HMOs require you to select a primary care physician who coordinates your care." }
      ],
      I: [
        { term: "In-Network Provider", definition: "A healthcare provider who has contracted with your health insurance company to provide services at a discounted rate." },
        { term: "Insurance Premium", definition: "The amount you pay to your health insurance company for your coverage, typically on a monthly basis." }
      ],
      M: [
        { term: "Medicaid", definition: "A state and federal program that provides health coverage for some low-income people, families and children, pregnant women, the elderly, and people with disabilities." },
        { term: "Medicare", definition: "A federal health insurance program for people who are 65 or older, certain younger people with disabilities, and people with End-Stage Renal Disease." }
      ],
      O: [
        { term: "Open Enrollment Period", definition: "The yearly period when people can enroll in a health insurance plan or change their existing coverage." },
        { term: "Out-of-Pocket Maximum", definition: "The most you have to pay for covered services in a plan year. After you spend this amount on deductibles, copayments, and coinsurance, your health plan pays 100% of the costs of covered benefits." }
      ],
      P: [
        { term: "Pre-existing Condition", definition: "A health problem you had before the date your new health coverage starts. Under the ACA, health insurance companies can't refuse to cover you or charge you more because of a pre-existing condition." },
        { term: "Preferred Provider Organization (PPO)", definition: "A type of health plan that contracts with medical providers to create a network of participating providers. You pay less if you use providers in the network but can use providers outside the network for an additional cost." }
      ]
    };
    const filteredTerms = computed(() => {
      if (!searchQuery.value.trim())
        return terms;
      const query = searchQuery.value.toLowerCase();
      const result = {};
      for (const [letter, items] of Object.entries(terms)) {
        const matches = items.filter(
          (item) => item.term.toLowerCase().includes(query) || item.definition.toLowerCase().includes(query)
        );
        if (matches.length > 0)
          result[letter] = matches;
      }
      return result;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PatternSection = __nuxt_component_0;
      const _component_HomepageHeroSection = __nuxt_component_1;
      const _component_Icon = __nuxt_component_0$1;
      const _component_GlossaryTermCard = _sfc_main$1;
      const _component_AccordionItem = __nuxt_component_4;
      const _component_StillHaveQuestions = __nuxt_component_5;
      const _component_CallToAction = _sfc_main$2;
      _push(ssrRenderComponent(_component_PatternSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HomepageHeroSection, null, null, _parent2, _scopeId));
            _push2(`<div class="container mx-auto px-4"${_scopeId}><div class="max-w-4xl mx-auto"${_scopeId}><div class="my-12"${_scopeId}><div class="flex items-center space-x-4 mb-8"${_scopeId}><div class="bg-primary/10 p-3 rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide-book-open",
              class: "h-16 w-16 text-primary"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h2 class="text-2xl font-semibold"${_scopeId}>Navigate Health Insurance Terms with Confidence</h2><p class="text-gray-600"${_scopeId}> Our comprehensive glossary helps you understand the complex language of health insurance </p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6"${_scopeId}><div class="mb-8 relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide-search",
              class: "absolute ml-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`<input${ssrRenderAttr("value", searchQuery.value)} type="text" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm pl-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Search for a term or definition..."${_scopeId}></div>`);
            if (!searchQuery.value) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_GlossaryTermCard, {
                title: "Quick Reference",
                description: "Instantly access definitions of common terms like deductibles, copays, and premiums.",
                icon: "lucide-info",
                bgClass: "bg-amber-50",
                borderClass: "border-amber-200",
                iconColor: "text-amber-600"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_GlossaryTermCard, {
                title: "Insurance Basics",
                description: "Learn the essential concepts that form the foundation of health insurance.",
                icon: "lucide-library",
                bgClass: "bg-blue-50",
                borderClass: "border-blue-200",
                iconColor: "text-blue-600"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_GlossaryTermCard, {
                title: "Medicare Terms",
                description: "Definitions for Medicare-related terms to help seniors understand their healthcare options.",
                icon: "lucide-book-open",
                bgClass: "bg-green-50",
                borderClass: "border-green-200",
                iconColor: "text-green-600"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(filteredTerms.value, (group, letter) => {
              _push2(`<div class="border-b pb-4 last:border-0"${_scopeId}><h3 class="text-6xl font-bold text-primary mb-4"${_scopeId}>${ssrInterpolate(letter)}</h3><div class="space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(group, (item) => {
                _push2(ssrRenderComponent(_component_AccordionItem, {
                  key: item.term,
                  term: item.term,
                  definition: item.definition
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            });
            _push2(`<!--]--></div></div></div>`);
            _push2(ssrRenderComponent(_component_StillHaveQuestions, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_CallToAction, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HomepageHeroSection),
              createVNode("div", { class: "container mx-auto px-4" }, [
                createVNode("div", { class: "max-w-4xl mx-auto" }, [
                  createVNode("div", { class: "my-12" }, [
                    createVNode("div", { class: "flex items-center space-x-4 mb-8" }, [
                      createVNode("div", { class: "bg-primary/10 p-3 rounded-full" }, [
                        createVNode(_component_Icon, {
                          name: "lucide-book-open",
                          class: "h-16 w-16 text-primary"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("h2", { class: "text-2xl font-semibold" }, "Navigate Health Insurance Terms with Confidence"),
                        createVNode("p", { class: "text-gray-600" }, " Our comprehensive glossary helps you understand the complex language of health insurance ")
                      ])
                    ]),
                    createVNode("div", { class: "rounded-lg border bg-card text-card-foreground shadow-sm p-6" }, [
                      createVNode("div", { class: "mb-8 relative" }, [
                        createVNode(_component_Icon, {
                          name: "lucide-search",
                          class: "absolute ml-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5"
                        }),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                          type: "text",
                          class: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm pl-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          placeholder: "Search for a term or definition..."
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, searchQuery.value]
                        ])
                      ]),
                      !searchQuery.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                      }, [
                        createVNode(_component_GlossaryTermCard, {
                          title: "Quick Reference",
                          description: "Instantly access definitions of common terms like deductibles, copays, and premiums.",
                          icon: "lucide-info",
                          bgClass: "bg-amber-50",
                          borderClass: "border-amber-200",
                          iconColor: "text-amber-600"
                        }),
                        createVNode(_component_GlossaryTermCard, {
                          title: "Insurance Basics",
                          description: "Learn the essential concepts that form the foundation of health insurance.",
                          icon: "lucide-library",
                          bgClass: "bg-blue-50",
                          borderClass: "border-blue-200",
                          iconColor: "text-blue-600"
                        }),
                        createVNode(_component_GlossaryTermCard, {
                          title: "Medicare Terms",
                          description: "Definitions for Medicare-related terms to help seniors understand their healthcare options.",
                          icon: "lucide-book-open",
                          bgClass: "bg-green-50",
                          borderClass: "border-green-200",
                          iconColor: "text-green-600"
                        })
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "space-y-6" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredTerms.value, (group, letter) => {
                          return openBlock(), createBlock("div", {
                            key: letter,
                            class: "border-b pb-4 last:border-0"
                          }, [
                            createVNode("h3", { class: "text-6xl font-bold text-primary mb-4" }, toDisplayString(letter), 1),
                            createVNode("div", { class: "space-y-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(group, (item) => {
                                return openBlock(), createBlock(_component_AccordionItem, {
                                  key: item.term,
                                  term: item.term,
                                  definition: item.definition
                                }, null, 8, ["term", "definition"]);
                              }), 128))
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  createVNode(_component_StillHaveQuestions)
                ])
              ]),
              createVNode(_component_CallToAction)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/health-insurance-glossary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=health-insurance-glossary-DMEAukZS.js.map
