import { d as defineEventHandler } from './nitro/node-server.mjs';
import { c as getTopics } from './videoRepository.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'vue';
import 'nitropack/dist/runtime/plugin';
import 'node:fs';
import 'node:url';
import '@prisma/client';
import 'crypto';
import '@vueuse/core';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'ipx';

const topics = defineEventHandler(async () => {
  const topics = await getTopics();
  const rowSize = 2;
  let row = [];
  let i, l, chunkSize = rowSize;
  for (i = 0, l = topics.length; i < l; i += chunkSize) {
    row.push(topics.slice(i, i + chunkSize));
  }
  return row;
});

export { topics as default };
//# sourceMappingURL=topics.mjs.map
