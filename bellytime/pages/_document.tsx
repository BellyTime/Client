import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="status bar color" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="ios status bar color"
          />
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          ></meta>
          {/* https://wellsw.tistory.com/34 */}
          <meta name="apple-mobile-web-app-title" content="Your app title" />
          <link rel="apple-touch-icon" href="/static/icon_192.png" />
          <link rel="shortcut icon" href="/static/icon_192.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <script src="https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js?autoload=false"></script>
          <script
            src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOMAP_API_KEY}&libraries=services`}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
