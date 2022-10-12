# Repro of the Vue + Server Build Bug

![Error Screenshot](./screenshot.jpg)

Run `npm run build` to see the above error.  This is a problem when using `@astrojs/vue` together with an SSR plugin like `@astrojs/cloudflare` or `@astrojs/node`.
