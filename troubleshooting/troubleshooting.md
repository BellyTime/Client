1.
GenerateSW has been called multiple times 
https://github.com/quasarframework/quasar/issues/7272

==>Hi,

Like it is described in GoogleChrome/workbox#1790 there is no good way to fix this (especially from Quasar side). However, we do not want to supply a dummy service worker in dev mode because that would make the whole developer experience awful. You'd be able to test your service worker only on production builds which adds a lot of overhead and time lost. But like we wrote in our docs, when you develop an app and your goal at that moment does not include handling the service worker, you can temporarily switch to "quasar dev -m spa". Wish the workbox team would find a way to avoid the issue, but at the moment, it is what it is.

2. https://github.com/laravel-mix/laravel-mix/issues/2572
npm install  postcss-loader --legacy-peer-deps


3. https://github.com/storybookjs/storybook/issues/15336
Hello, we're in the same situation.
Adding webpack@5 in our dev dependencies doesn't solve the issue for us, we still have the same error.
We're in a monorepo using yarn workspaces.

EDIT :

It seems to work that way :

Install webpack@5 at the root of the monorepo yarn add -W -D webpack
Add webpack: "*" in peerDependencies of your package.
✅


4.https://github.com/GoogleChrome/workbox/issues/1790
As specified in https://www.npmjs.com/package/next-pwa?activeTab=readme#configuration

You can also do:

const withPWA = require('next-pwa')
 
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
    //...
  }
})