import _RehypeExternalLinks from 'rehype-external-links'
import _Highlight from '/Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.mjs'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'rehype-external-links': { instance: _RehypeExternalLinks },
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":"github-dark"}