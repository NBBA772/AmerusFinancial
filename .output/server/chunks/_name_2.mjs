import { e as eventHandler } from './nitro/node-server.mjs';
import { g as getTopicIdByName, a as getSeriesByTopicId, b as getVideosByTopicId } from './videoRepository.mjs';
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

const _name_ = eventHandler(async (event) => {
  const topicName = event.context.params.name;
  const topic = await getTopicIdByName(topicName);
  const series = await getSeriesByTopicId(topic.id);
  const videos = await getVideosByTopicId(topic.id);
  if (topic.id == 2) {
    videos.reverse();
  }
  return { series, videos, topic };
});

export { _name_ as default };
//# sourceMappingURL=_name_2.mjs.map
