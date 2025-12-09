<template>
  <aside class="mt-8 bg-white rounded-lg shadow-sm p-4">
    <h3 class="text-lg font-semibold mb-3">Related articles</h3>

    <ul class="space-y-3">
      <li
        v-for="(art, i) in displayArticles"
        :key="i"
        class="flex items-start gap-3"
      >
        <NuxtLink :to="art.url || art.href" class="flex-1 group">
          <div class="flex items-center gap-3">
            <img
              v-if="art.image"
              :src="art.image"
              :alt="art.title"
              class="w-16 h-10 object-cover rounded"
            />
            <div>
              <h4 class="text-sm font-medium text-slate-900 group-hover:text-sky-600">{{ art.title }}</h4>
              <p v-if="art.excerpt" class="text-xs text-slate-500 mt-1">{{ art.excerpt }}</p>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <p v-if="moreCount > 0" class="mt-3 text-xs text-slate-500">+{{ moreCount }} more</p>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  /**
   * Array of related article objects. Example item:
   * { title: string, url?: string, href?: string, excerpt?: string, image?: string }
   */
  relatedArticles: {
    type: Array as PropType<
      Array<{
        title: string
        url?: string
        href?: string
        excerpt?: string
        image?: string
      }>
    >,
    default: () => []
  },
  /** maximum number of items to show (defaults to 3) */
  max: {
    type: Number,
    default: 3
  }
})

const displayArticles = computed(() => (props.relatedArticles || []).slice(0, props.max))
const moreCount = computed(() => Math.max(0, (props.relatedArticles?.length || 0) - props.max))
</script>

<style scoped>
/* small visual niceties; project uses Tailwind so keep this minimal */
</style>
