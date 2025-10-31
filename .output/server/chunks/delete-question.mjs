import { d as defineEventHandler, r as readBody, g as getCookie, a as getUserBySessionToken, s as sendError, c as createError } from './nitro/node-server.mjs';
import { f as findQuestion, d as deleteQuestion$1 } from './askJackRespository.mjs';
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

const deleteQuestion = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const question = await findQuestion(parseInt(body.questionId));
  const authToken = getCookie(event, "auth_token");
  if (authToken == null) {
    return await sendDefaultErrorResponse(event, "Unauthorized", 403, "You must be logged in to answer a question");
  }
  const user = await getUserBySessionToken(authToken);
  if (!user) {
    return await sendDefaultErrorResponse(event, "Unauthorized", 403, "You must be logged in to answer a question");
  }
  const isMine = user.id == question.authorId;
  if (!isMine) {
    sendError(event, createError({ statusCode: 403, statusMessage: "Unauthorized" }));
  }
  return await deleteQuestion$1(question.id);
});

export { deleteQuestion as default };
//# sourceMappingURL=delete-question.mjs.map
