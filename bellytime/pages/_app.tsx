import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { baseURL } from "@/public/static/data";
import { Navbar } from "components";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";

// import "/trusted-security-policies";
function MyApp(
  { Component, pageProps }: AppProps,
  navigator: Navigator,
  window: Window
) {
  // axios.defaults.baseURL = baseURL;
  const [queryClient] = useState(() => new QueryClient());
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("service worker registration successful");
      })
      .catch((err) => {
        console.warn("service worker registration failed", err.message);
      });
  }

  return (
    <>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <RecoilNexus />
            <Component {...pageProps}>
              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
              />
            </Component>
            <Navbar />
          </RecoilRoot>
          <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
//PWA: https://bkm412.github.io/PWA/
//서비스워커설정: https://jamongjjang.tistory.com/65
//https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register
//템플릿 https://github.com/mvllow/next-pwa-template

//interceptor로 토큰 잡는 코드 실행

//캐시 지우는법
//https://gist.github.com/deanhume/4b7e1f136cbee288cff9f0fc46318fbb

//https://backend-intro.vlpt.us/6/06.html?q=
