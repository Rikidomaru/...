// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://032075b41f151bfa2166ef0e800d24e6@o4505163008770048.ingest.sentry.io/4505842860228608',

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.05,
  enabled: process.env.NODE_ENV === 'production',
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
