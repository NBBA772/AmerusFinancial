import { e as eventHandler, r as readBody, g as getCookie, a as getUserBySessionToken } from './nitro/node-server.mjs';
import { a as createQuestion } from './askJackRespository.mjs';
import { s as sendDefaultErrorResponse } from './DefaultErrorsResponse.mjs';
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

const ask = eventHandler(async (event) => {
  const body = await readBody(event);
  const authToken = getCookie(event, "auth_token");
  if (!authToken) {
    return await sendDefaultErrorResponse(event, "Unauthorized", 403, "You must be logged in to ask a question");
  }
  const user = await getUserBySessionToken(authToken);
  if (!user) {
    return await sendDefaultErrorResponse(event, "Unauthorized", 403, "You must be logged in to ask a question");
  }
  const data = body.data;
  return await createQuestion(data, user.id);
});

export { ask as default };
//# sourceMappingURL=ask.mjs.map
