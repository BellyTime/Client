# document is not defined 에러 처리

  ● App › renders without crashing

    The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.
    Consider using the "jsdom" test environment.

    ReferenceError: document is not defined
테스트 코드 실행 시, 위와 같은 에러가 발생할 수 있습니다. 이는 Jest의 기본 테스트 환경이 node로 설정되어 있기 때문입니다. node에는 DOM 객체가 없기 때문에 react test liblary가 제대로 작동할 수 없습니다. 컴포넌트 테스트를 위해서는 테스트 환경을 jsdom으로 변경해 주어야 합니다. 해결책은 크게 두 가지가 있습니다.

1. jest.config.js에 설정을 추가하는 방법

jest.config.js에 "testEnvironment": "jsdom" 을  추가합니다. 설정을 추가하면 전역적으로 테스트 환경이 jsdom이 됩니다.

2. 각 테스트 파일에 @jest-environment jsdom 주석 추가

/**
 * @jest-environment jsdom
 */
각 테스트 파일 상단에 위와 같은 주석을 추가합니다. 이 방법은 해당 파일만 jsdom 환경에서 실행되도록 합니다.

https://blog.antoniolofiego.com/setting-up-a-nextjs-application-with-typescript-jit-tailwind-css-and-jestreact-testing-library
https://yoonho-devlog.tistory.com/175