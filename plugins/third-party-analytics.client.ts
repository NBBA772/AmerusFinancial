export default defineNuxtPlugin(() => {
  if (process.server) return;

  const config = useRuntimeConfig();
  const enabled = Boolean(config.public?.enableThirdPartyScripts);
  if (!enabled) return;

  // Optional consent gate: expects localStorage key 'analytics_consent' === 'granted'
  try {
    const consent = localStorage.getItem('analytics_consent') === 'granted';
    if (!consent) return;
  } catch (_) {
    // If localStorage is unavailable, do not load
    return;
  }

  // Load Ahrefs Analytics
  const ahrefs = document.createElement('script');
  ahrefs.src = 'https://analytics.ahrefs.com/analytics.js';
  ahrefs.async = true;
  ahrefs.setAttribute('data-key', 'V0zZlhoarGMJAxDX81ncuA');
  document.head.appendChild(ahrefs);

  // Load SearchAtlas Dynamic Optimization
  const sa = document.createElement('script');
  sa.src = 'https://dashboard.searchatlas.com/scripts/dynamic_optimization.js';
  (sa as any).dataset = (sa as any).dataset || {};
  sa.setAttribute('data-uuid', 'd9ce0fbb-2201-4f35-943d-e7d1ad7e8913');
  sa.id = 'sa-dynamic-optimization-loader';
  document.head.appendChild(sa);
});
