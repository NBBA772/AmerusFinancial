import { l as useOgImageRuntimeConfig, B as joinURL, C as useNitroOrigin, D as withQuery, c as createError } from './nitro/node-server.mjs';
import playwright from 'playwright';
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

async function createScreenshot({ basePath, e, options, extension }, browser) {
  const { colorPreference } = useOgImageRuntimeConfig();
  const path = options.component === "PageScreenshot" ? basePath : joinURL("/__og-image__/image", basePath, `og.html`);
  const page = await browser.newPage({
    colorScheme: colorPreference || "no-preference",
    baseURL: useNitroOrigin(e)
  });
  try {
    if (false && !options.html) ;
    await page.setViewportSize({
      width: options.width || 1200,
      height: options.height || 630
    });
    if (options.html) {
      const html = options.html;
      await page.evaluate((html2) => {
        document.open("text/html");
        document.write(html2);
        document.close();
      }, html);
      await page.waitForLoadState("networkidle");
    } else {
      await page.goto(withQuery(path, options.props), {
        timeout: 1e4,
        waitUntil: "networkidle"
      });
    }
    const screenshotOptions = {
      timeout: 1e4,
      animations: "disabled",
      type: extension === "png" ? "png" : "jpeg"
    };
    const _options = options.screenshot || {};
    if (_options.delay)
      await page.waitForTimeout(_options.delay);
    if (_options.mask) {
      await page.evaluate((mask) => {
        for (const el of document.querySelectorAll(mask))
          el.style.display = "none";
      }, _options.mask);
    }
    if (_options.selector)
      return await page.locator(_options.selector).screenshot(screenshotOptions);
    return await page.screenshot(screenshotOptions);
  } finally {
    await page.close();
  }
}

async function createBrowser() {
  return await playwright.chromium.launch({
    headless: true
  });
}

const ChromiumRenderer = {
  name: "chromium",
  supportedFormats: ["png", "jpeg", "jpg"],
  async debug() {
    return {};
  },
  async createImage(ctx) {
    const browser = await createBrowser();
    const screenshot = await createScreenshot(ctx, browser).catch((e) => e);
    await browser.close();
    if (screenshot instanceof Error) {
      return createError({
        statusCode: 400,
        cause: screenshot,
        statusMessage: `[Nuxt OG Image] Failed to create screenshot ${screenshot.message}.`
      });
    }
    return screenshot;
  }
};

export { ChromiumRenderer as default };
//# sourceMappingURL=renderer.mjs.map
