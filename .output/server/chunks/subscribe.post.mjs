import { d as defineEventHandler, r as readBody, h as getUserById, j as updateStripeCustomerId, i as sendRedirect } from './nitro/node-server.mjs';
import { g as getSubscribeUrl } from './stripeService.mjs';
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
import 'stripe';

const subscribe_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const lookupKey = body.lookup_key;
  const userId = body.user_id;
  const user = await getUserById(parseInt(userId));
  const { url, user: customer, shouldUpdateUser } = await getSubscribeUrl(lookupKey, user);
  if (shouldUpdateUser) {
    await updateStripeCustomerId(customer);
  }
  await sendRedirect(event, url);
});

export { subscribe_post as default };
//# sourceMappingURL=subscribe.post.mjs.map
