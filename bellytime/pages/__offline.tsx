import Head from "next/head";

export default () => (
  <>
    <Head>
      <title>next-pwa example</title>
    </Head>
    <h1>This is offline fallback page</h1>
    <h2>When offline, any page route will fallback to this page</h2>
  </>
);
//https://github.com/shadowwalker/next-pwa/blob/master/examples/offline-fallback-v2/pages/_offline.js