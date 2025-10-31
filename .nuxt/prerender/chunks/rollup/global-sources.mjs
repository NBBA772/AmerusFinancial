const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxt/content:urls",
            "description": "Generated from your markdown files.",
            "tips": [
                "You can provide a `sitemap` key in your markdown frontmatter to configure specific URLs. Make sure you include a `loc`."
            ]
        },
        "fetch": "/__sitemap__/nuxt-content-urls.json",
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/about-us"
            },
            {
                "loc": "/articles/overview"
            },
            {
                "loc": "/categories"
            },
            {
                "loc": "/contact"
            },
            {
                "loc": "/content"
            },
            {
                "loc": "/dashboard/ask"
            },
            {
                "loc": "/dashboard"
            },
            {
                "loc": "/dashboard/search"
            },
            {
                "loc": "/dashboard/WebsiteBuild"
            },
            {
                "loc": "/health-insurance-glossary"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/info"
            },
            {
                "loc": "/login"
            },
            {
                "loc": "/player"
            },
            {
                "loc": "/PrivacyPolicy"
            },
            {
                "loc": "/register"
            },
            {
                "loc": "/resources"
            },
            {
                "loc": "/retirement"
            },
            {
                "loc": "/series"
            },
            {
                "loc": "/services/auto/commercial-auto"
            },
            {
                "loc": "/services/auto/comprehensive-coverage"
            },
            {
                "loc": "/services/auto"
            },
            {
                "loc": "/services/auto/multi-vehicle"
            },
            {
                "loc": "/services/auto/personal-auto"
            },
            {
                "loc": "/services/auto/personal-injury-protection"
            },
            {
                "loc": "/services/auto/uninsured-motorist"
            },
            {
                "loc": "/services/business/commercial-auto"
            },
            {
                "loc": "/services/business/commercial-property"
            },
            {
                "loc": "/services/business/general-liability"
            },
            {
                "loc": "/services/business"
            },
            {
                "loc": "/services/business/professional-liability"
            },
            {
                "loc": "/services/business/workers-comp"
            },
            {
                "loc": "/services/health/dental"
            },
            {
                "loc": "/services/health/family-coverage"
            },
            {
                "loc": "/services/health/group-health"
            },
            {
                "loc": "/services/health"
            },
            {
                "loc": "/services/health/individual-health"
            },
            {
                "loc": "/services/health/medicare"
            },
            {
                "loc": "/services/health/private-health"
            },
            {
                "loc": "/services/health/senior-dental"
            },
            {
                "loc": "/services/health/vision-coverage"
            },
            {
                "loc": "/services/home/flood-insurance"
            },
            {
                "loc": "/services/home/homeowners"
            },
            {
                "loc": "/services/home"
            },
            {
                "loc": "/services/home/liability-coverage"
            },
            {
                "loc": "/services/home/living-expenses"
            },
            {
                "loc": "/services/home/property-coverage"
            },
            {
                "loc": "/services/home/property-protection"
            },
            {
                "loc": "/services/home/valuable-items"
            },
            {
                "loc": "/services"
            },
            {
                "loc": "/services/life/final-expense"
            },
            {
                "loc": "/services/life/group-life-insurance"
            },
            {
                "loc": "/services/life"
            },
            {
                "loc": "/services/life/key-person-insurance"
            },
            {
                "loc": "/services/life/life-insurance"
            },
            {
                "loc": "/services/life/split-dollar"
            },
            {
                "loc": "/services/life/term-life"
            },
            {
                "loc": "/services/life/universal-life"
            },
            {
                "loc": "/services/life/whole-life"
            },
            {
                "loc": "/services/retirement/401k"
            },
            {
                "loc": "/services/retirement/annuity"
            },
            {
                "loc": "/services/retirement/dental"
            },
            {
                "loc": "/services/retirement"
            },
            {
                "loc": "/services/retirement/iras"
            },
            {
                "loc": "/services/retirement/long-term-care"
            },
            {
                "loc": "/services/retirement/pension-planning"
            },
            {
                "loc": "/services/retirement/retirement-income"
            },
            {
                "loc": "/subscribe"
            },
            {
                "loc": "/subscribe/success"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
