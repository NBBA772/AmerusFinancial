import { d as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import { h as handleSubscriptionChange, a as handleSubscriptionCreate } from './stripeService.mjs';
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

const webhooks_post = defineEventHandler(async (event) => {
  const stripeEvent = await readBody(event);
  let subscription;
  switch (stripeEvent.type) {
    case "customer.subscription.created":
      stripeEvent.data.object;
      subscription = stripeEvent.data.object;
      handleSubscriptionCreate(subscription, stripeEvent.created);
      break;
    case "customer.subscription.deleted":
      stripeEvent.data.object;
      break;
    case "customer.subscription.updated":
      stripeEvent.data.object;
      subscription = stripeEvent.data.object;
      handleSubscriptionChange(subscription, stripeEvent.created);
      break;
    default:
      console.log(`Unhandled event type ${stripeEvent.type}`);
  }
  return `handled ${stripeEvent.type}.`;
});

export { webhooks_post as default };
//# sourceMappingURL=webhooks.post.mjs.map
