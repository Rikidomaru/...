/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/academy/:path*',
        destination: '/bwai/academy/:path*',
        permanent: true,
      },
      {
        source: '/careers',
        destination: 'https://careers.autoblocks.ai',
        permanent: false,
      },
      {
        source: '/jobs',
        destination: 'https://careers.autoblocks.ai',
        permanent: false,
      },
      {
        source: '/book-meeting',
        destination: 'https://savvycal.com/autoblocks/intro',
        permanent: false,
      },
      {
        source: '/demo',
        destination:
          'https://www.loom.com/share/86026da9da0540599d7dcba8a7b81e78',
        permanent: false,
      },
      {
        source: '/blog/gamma-case-study-debugging-ai-at-scale',
        destination: '/blog/gamma-case-study',
        permanent: true,
      },

      {
        source: '/blog/clickhouse-case-study',
        destination: '/customer-stories/clickhouse',
        permanent: true,
      },
      {
        source: '/blog/gamma-case-study',
        destination: '/customer-stories/gamma',
        permanent: true,
      },
      {
        source: '/testing-evaluation',
        destination: '/solution',
        permanent: true,
      },
      {
        source: '/health',
        destination: 'https://form.typeform.com/to/DRX2Oa0m',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'bwai.autoblocks.ai',
          },
        ],
        permanent: false,
        destination: 'https://www.autoblocks.ai/bwai/:path*',
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'bwai.autoblocks.ai',
          },
        ],
        permanent: false,
        destination: 'https://www.autoblocks.ai/bwai',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'health.autoblocks.ai',
          },
        ],
        permanent: false,
        destination: 'https://www.autoblocks.ai/healthcare/:path*',
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'health.autoblocks.ai',
          },
        ],
        permanent: false,
        destination: 'https://www.autoblocks.ai/healthcare',
      },
    ];
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, child_process: false };
    return config;
  },
  images: {
    domains: ['basehub.earth', 'media.graphassets.com'],
  },
};

module.exports = nextConfig;

// Injected content via Sentry wizard below

const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,

    org: 'autoblocks-64',
    project: 'marketing-site',
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  },
);
