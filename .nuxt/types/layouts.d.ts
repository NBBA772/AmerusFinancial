import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "mobile-only" | "default"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}