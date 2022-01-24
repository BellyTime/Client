## PWA을 적용하기 위한 기본 요건

1. https 지원

2. service-worker 사용

3. manifest 작성

4. 앱 아이콘 등록



### Next.js 프로젝트에 PWA 적용
Next.js로 제작된 프로젝트를 이미 가지고 있으며, https는 적용되어 있는 상태로 가정하고 작성합니다.

1. ~~devDependencies에 sw-precache-webpack-plugin 추가~~

sw-precache-webpack-plugin은 build시 .next/static/ 위치에 service-worker.js를 자동으로 생성해 줍니다.

```npm install --save-dev sw-precache-webpack-plugin```

2. 웹팩 설정

```/next.config.js

var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
   
module.export = {
  ...,
  webpack : (config, {dev}) => {
    ...;
    if(!dev){
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          staticFileGlobsIgnorePatterns: [/\.next\//],
          minify: true
        })
      )
    }
  }
}
```
3. service-worker.js 라우팅 설정

```/server.js (서버파일)

const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const port = parseInt(process.env.PORT, 10) || 3000;
const handle = app.getRequestHandler();
   
app.prepare().then(() => {
  const server = express();
  const path = require('path');
     
  server.get("/service-worker.js", (req, res) => {
		const filePath = path.join(__dirname, '.next', 'service-worker.js')
		app.serveStatic(req, res, filePath);
	});
     
  server.get('*', (req, res) => {
		return handle(req, res);
	});
     
  server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
}
```

4. manifest 작성

```/static/manifest.json

{
    "name": "Your app name",
    "short_name": "Your app short_name",
    "background_color": "#FFFFFF",
    "theme_color": "status bar color",
    "description": "Your app description",
    "display": "standalone",
    "start_url": "/",
    "icons": [{
        "src": "/static/icon_192.png",
        "type": "image/png",
        "sizes": "192x192"
    },{
        "src": "/static/icon_512.png",
        "type": "image/png",
        "sizes": "512x512"
    }]
}
```

5. meta tag 추가

ios를 위한 태그와 manifest 사용을 위한 태그를 넣어줍니다.

```<Head>
  ...
  <meta name="theme-color" content="status bar color"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="ios status bar color"/>
                <meta name="apple-mobile-web-app-title" content="Your app title"/>
                <link rel="apple-touch-icon" href="/static/icon_192.png"/>
                <link rel="shortcut icon" href="/static/icon_192.png"/>
                <link rel="manifest" href="/static/manifest.json"/>
</Head>
```

service worker 등록

/pages/_app.js

if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then(registration => {
                    console.log('service worker registration successful')
   
                })
                .catch(err => {
                    console.warn('service worker registration failed', err.message)
                })
        }

6. noscript 태그 추가 (현재 Container태그 지원 안됨.)

```/pages/_app.js

<Container>
 	...
  <noscript>You should use javascript</noscript>
</Container>
```

위 과정을 다 따르고 서버에 빌드 후 서버를 시작해서 크롬으로 접속해보세요.

chromeDevTools > Audits > Run audits를 실행해보시면 내 웹이 PWA로서 동작할 수 있는지, 앱으로 설치 가능한 상태인지 체크가 가능합니다.

만약 오류가 있다면 해당 오류메세지를 보고 수정하시면 됩니다.

PWA 앱 상태로 인스톨시키기
pwa를 잘 적용하셨다면, 모바일 사용자에게 홈 화면에 인스톨 시킬 수 있습니다.

Android 사용자는 홈페이지에 접속 시에 배너가 노출되어 홈 화면에 앱을 설치할 것인지 물은 후에 홈 화면에 자동으로 앱이 설치됩니다.

IOS 사용자는 배너를 지원하지 않기 때문에 사용자가 직접 홈 화면에 추가 버튼을 눌러서 설치할 수 있습니다.