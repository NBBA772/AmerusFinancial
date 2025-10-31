import { e as eventHandler, v as validateUser, s as sendError, c as createError, w as createUser, q as makeSession } from './nitro/node-server.mjs';
import bcrypt from 'bcrypt';
import { ZodError } from 'zod';
import { s as sendDefaultErrorResponse } from './DefaultErrorsResponse.mjs';
import { parseBodyAs, z } from '@sidebase/nuxt-parse';
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
  username: z.string({
    required_error: "username required"
  }).min(1, { message: "username required" }),
  firstName: z.string({
    required_error: "firstName required"
  }).min(1, { message: "firstName required" }),
  lastName: z.string({
    required_error: "lastName required"
  }).min(1, { message: "lastName required" }),
  phone: z.string({
    required_error: "phone required"
  }).min(1, { message: "phone required" }),
  email: z.string({
    required_error: "valid email required"
  }).email({ message: "valid email required" }),
  password: z.string({
    required_error: "password required"
  }).min(8, { message: "password must be at least 8 characters" })
});
async function registerRequest(event) {
  return await parseBodyAs(event, bodySchema);
}

const register = eventHandler(async (event) => {
  try {
    const data = await registerRequest(event);
    const validation = await validateUser(data);
    if (validation.hasErrors === true && validation.errors) {
      const errors = JSON.stringify(Object.fromEntries(validation.errors));
      return sendError(event, createError({ statusCode: 422, data: errors }));
    }
    const encryptedPassword = await bcrypt.hash(data.password, 10);
    const userData = {
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      loginType: "email",
      password: encryptedPassword
    };
    const user = await createUser(userData);
    return await makeSession(user, event);
  } catch (error) {
    if (error.data instanceof ZodError) {
      return await sendZodErrorResponse(event, error.data);
    }
    return await sendDefaultErrorResponse(event, "oops", 500, error);
  }
});

export { register as default };
//# sourceMappingURL=register.mjs.map
