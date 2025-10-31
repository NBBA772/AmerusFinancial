import { d as defineEventHandler, f as getQuery, h as getUserById } from './nitro/node-server.mjs';
import { f as findQuestion } from './askJackRespository.mjs';
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

const question = defineEventHandler(async (event) => {
  const queries = getQuery(event);
  const questionId = parseInt(queries.id);
  const question = await findQuestion(questionId);
  question.answers.forEach(async (answer) => {
    const user2 = await getUserById(answer.authorId);
    answer.authorName = "@" + user2.username;
  });
  const user = await getUserById(question.authorId);
  question.authName = "@" + user.username;
  return question;
});

export { question as default };
//# sourceMappingURL=question.mjs.map
