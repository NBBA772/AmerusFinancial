import _FunctionrehypeExternalLinksoptionsconstsettingsoptionsemptyOptionsconstprotocolssettingsProtocolsdefaultProtocolsconstis0HastUtilIsElementConvertElementsettingsTestTransformparamRoottreeTreereturnsundefinedNothingReturnfunctiontree0UnistUtilVisitVisittreeelementfunctionnodeindexparentifnodeTagNameatypeofnodePropertiesHrefstringisnodeindexparentconsturlnodePropertiesHrefif0IsAbsoluteUrlDefaulturlprotocolsIncludesurlSlice0urlIndexOfurlStartsWithconstcontentRawcreateIfNeededsettingsContentnodeconstcontentcontentRawArrayIsArraycontentRawcontentRawcontentRawconstrelRawcreateIfNeededsettingsRelnodedefaultRelconstreltypeofrelRawstring0SpaceSeparatedTokensParserelRawrelRawconsttargetcreateIfNeededsettingsTargetnodeconstpropertiescreateIfNeededsettingsPropertiesnodeifpropertiesObjectAssignnodeProperties0StructuredCloneDefaultpropertiesifrelLength0nodePropertiesRelReliftargetnodePropertiesTargettargetifcontentconstpropertiescreateIfNeededsettingsContentPropertiesnodenodeChildrenPushtypeelementtagNamespanproperties0StructuredCloneDefaultpropertieschildren0StructuredCloneDefaultcontent from 'function rehypeExternalLinks(options) {const settings = options || emptyOptions;const protocols = settings.protocols || defaultProtocols;const is = (0, _hastUtilIsElement.convertElement)(settings.test); /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */return function (tree) {(0, _unistUtilVisit.visit)(tree, 'element', function (node, index, parent) {if (node.tagName === 'a' && typeof node.properties.href === 'string' && is(node, index, parent)) {const url = node.properties.href;if ((0, _isAbsoluteUrl.default)(url) ? protocols.includes(url.slice(0, url.indexOf(':'))) : url.startsWith('//')) {const contentRaw = createIfNeeded(settings.content, node);const content = contentRaw && !Array.isArray(contentRaw) ? [contentRaw] : contentRaw;const relRaw = createIfNeeded(settings.rel, node) || defaultRel;const rel = typeof relRaw === 'string' ? (0, _spaceSeparatedTokens.parse)(relRaw) : relRaw;const target = createIfNeeded(settings.target, node);const properties = createIfNeeded(settings.properties, node);if (properties) {Object.assign(node.properties, (0, _structuredClone.default)(properties));}if (rel.length > 0) {node.properties.rel = [...rel];}if (target) {node.properties.target = target;}if (content) {const properties = createIfNeeded(settings.contentProperties, node) || {};node.children.push({ type: 'element', tagName: 'span', properties: (0, _structuredClone.default)(properties), children: (0, _structuredClone.default)(content) });}}}
      });
  };
}'
import _Highlight from '/Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.mjs'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'function rehypeExternalLinks(options) {const settings = options || emptyOptions;const protocols = settings.protocols || defaultProtocols;const is = (0, _hastUtilIsElement.convertElement)(settings.test); /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */return function (tree) {(0, _unistUtilVisit.visit)(tree, 'element', function (node, index, parent) {if (node.tagName === 'a' && typeof node.properties.href === 'string' && is(node, index, parent)) {const url = node.properties.href;if ((0, _isAbsoluteUrl.default)(url) ? protocols.includes(url.slice(0, url.indexOf(':'))) : url.startsWith('//')) {const contentRaw = createIfNeeded(settings.content, node);const content = contentRaw && !Array.isArray(contentRaw) ? [contentRaw] : contentRaw;const relRaw = createIfNeeded(settings.rel, node) || defaultRel;const rel = typeof relRaw === 'string' ? (0, _spaceSeparatedTokens.parse)(relRaw) : relRaw;const target = createIfNeeded(settings.target, node);const properties = createIfNeeded(settings.properties, node);if (properties) {Object.assign(node.properties, (0, _structuredClone.default)(properties));}if (rel.length > 0) {node.properties.rel = [...rel];}if (target) {node.properties.target = target;}if (content) {const properties = createIfNeeded(settings.contentProperties, node) || {};node.children.push({ type: 'element', tagName: 'span', properties: (0, _structuredClone.default)(properties), children: (0, _structuredClone.default)(content) });}}}
      });
  };
}': { instance: _FunctionrehypeExternalLinksoptionsconstsettingsoptionsemptyOptionsconstprotocolssettingsProtocolsdefaultProtocolsconstis0HastUtilIsElementConvertElementsettingsTestTransformparamRoottreeTreereturnsundefinedNothingReturnfunctiontree0UnistUtilVisitVisittreeelementfunctionnodeindexparentifnodeTagNameatypeofnodePropertiesHrefstringisnodeindexparentconsturlnodePropertiesHrefif0IsAbsoluteUrlDefaulturlprotocolsIncludesurlSlice0urlIndexOfurlStartsWithconstcontentRawcreateIfNeededsettingsContentnodeconstcontentcontentRawArrayIsArraycontentRawcontentRawcontentRawconstrelRawcreateIfNeededsettingsRelnodedefaultRelconstreltypeofrelRawstring0SpaceSeparatedTokensParserelRawrelRawconsttargetcreateIfNeededsettingsTargetnodeconstpropertiescreateIfNeededsettingsPropertiesnodeifpropertiesObjectAssignnodeProperties0StructuredCloneDefaultpropertiesifrelLength0nodePropertiesRelReliftargetnodePropertiesTargettargetifcontentconstpropertiescreateIfNeededsettingsContentPropertiesnodenodeChildrenPushtypeelementtagNamespanproperties0StructuredCloneDefaultpropertieschildren0StructuredCloneDefaultcontent, options: {"target":"_blank","rel":["noopener","noreferrer"]} },
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":"github-dark"}