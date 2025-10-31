import { defineComponent, unref, useSSRContext } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import { useEditor, EditorContent } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@tiptap/vue-3/dist/index.js';
import StarterKit from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@tiptap/starter-kit/dist/index.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tiptap",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editor = useEditor({
      editable: props.editable,
      content: props.modelValue,
      editorProps: {
        attributes: {
          class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none rounded-lg p-5  dark:text-white"
        }
      },
      extensions: [StarterKit],
      onUpdate: ({ editor: editor2 }) => {
        let content = editor2.getHTML();
        emit("update:modelValue", content);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label for="message" class="block mb-2 ml-5 text-sm font-medium text-gray-900 dark:text-gray-400">${ssrInterpolate(__props.label)}</label>`);
      _push(ssrRenderComponent(unref(EditorContent), { editor: unref(editor) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/Tiptap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tiptap-DruRXd19.mjs.map
