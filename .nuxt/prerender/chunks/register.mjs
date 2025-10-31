import { eventHandler, sendError, createError } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/h3/dist/index.mjs';
import bcrypt from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/bcrypt/bcrypt.js';
import { v as validateUser, e as createUser, m as makeSession } from './nitro/nitro-prerenderer.mjs';
import { ZodError } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/zod/lib/index.mjs';
import { s as sendDefaultErrorResponse } from './DefaultErrorsResponse.mjs';
import { parseBodyAs, z } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@sidebase/nuxt-parse/dist/index.mjs';
import { s as sendZodErrorResponse } from './ZodErrorsResponse.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/destr/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/hookable/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/scule/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/klona/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/defu/dist/defu.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/ohash/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/ufo/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/radix3/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/nitropack/dist/runtime/plugin.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/pathe/dist/index.mjs';
import '@prisma/client';
import 'crypto';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/shiki/dist/core.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unified/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/micromark/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/micromark-util-character/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/slugify/slugify.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/remark-parse/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/remark-rehype/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/hast-util-to-string/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/github-slugger/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/detab/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/remark-emoji/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/remark-gfm/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/rehype-external-links/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/rehype-raw/index.js';
import 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/ipx/dist/index.mjs';

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
