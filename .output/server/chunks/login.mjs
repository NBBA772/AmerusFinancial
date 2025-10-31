import { e as eventHandler, o as getUserByEmail, s as sendError, c as createError, q as makeSession, t as sanitizeUserForFrontend } from './nitro/node-server.mjs';
import bcrypt from 'bcrypt';
import { ZodError } from 'zod';
import { parseBodyAs, z } from '@sidebase/nuxt-parse';
import { s as sendDefaultErrorResponse, a as getMappedError } from './DefaultErrorsResponse.mjs';
import { s as sendZodErrorResponse } from './ZodErrorsResponse.mjs';
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

const bodySchema = z.object({
  usernameOrEmail: z.string({
    required_error: "username or email required"
  }).min(1, { message: "username or email required" }),
  password: z.string({
    required_error: "password required"
  }).min(8, { message: "password must be at least 8 characters" })
});
async function loginRequest(event) {
  return await parseBodyAs(event, bodySchema);
}

const standardAuthError = getMappedError("Authentication", "Invalid Credentials");
const login = eventHandler(async (event) => {
  try {
    const data = await loginRequest(event);
    const user = await getUserByEmail(data.usernameOrEmail);
    if (user === null) {
      return sendError(event, createError({ statusCode: 401, data: standardAuthError }));
    }
    if (user.password == void 0) {
      return sendError(event, createError({ statusCode: 401, data: standardAuthError }));
    }
    const isPasswordCorrect = await bcrypt.compare(data.password, user.password);
    if (!isPasswordCorrect) {
      sendError(event, createError({ statusCode: 401, data: standardAuthError }));
    }
    await makeSession(user, event);
    return sanitizeUserForFrontend(user);
  } catch (error) {
    if (error.data instanceof ZodError) {
      return await sendZodErrorResponse(event, error.data);
    }
    return await sendDefaultErrorResponse(event, "Unauthenticated", 401, error);
  }
});

export { login as default };
//# sourceMappingURL=login.mjs.map
