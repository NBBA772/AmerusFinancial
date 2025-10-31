import { e as eventHandler, r as readBody, i as sendRedirect, u as useRuntimeConfig } from './nitro/node-server.mjs';
import Stripe from 'stripe';
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

const config = useRuntimeConfig();
const stripe = new Stripe(config.private.stripeSecretKey, null);
const createPortalSession = eventHandler(async (event) => {
  const body = await readBody(event);
  const session_id = body.session_id;
  const returnUrl = config.public.appDomain;
  const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: checkoutSession.customer,
    return_url: returnUrl
  });
  await sendRedirect(event, portalSession.url);
});

export { createPortalSession as default };
//# sourceMappingURL=createPortalSession.mjs.map
