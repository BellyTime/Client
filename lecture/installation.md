2022.1.15

- 설치
https://create-react-app.dev/docs/adding-typescript/

npx create-react-app client --template typescript

yarn add typescript @types/node @types/react @types/react-dom @types/jest
yarn add styled-components @types/styled-components styled-normalize
styled-normalize는 브라우저마다 다르게 보이는 css를 초기화 시키기 위해 다운 받습니다.

type definition이란, 소스코드를 보고 typescript에게 해 줄 설명을 만들어내는 것이다.
definitely typed라는 레포지토리에서 사람들이 많이 도왔다. 

2022.1.18
- 설치 (next, typescript, jest, react-query)
yarn create next-app --typescript
Next.js TypeScript 환경에서 Jest 초기 설정

각 패키지의 기능은 다음과 같습니다.

- @testing-library 패키지들, babel-jest : @testing-libaray는 리액트 컴포넌트를 가상 브라우저에서 테스트하기 위한 기능들을 제공합니다. babel-jest는 테스트 코드를 변환하고 컴파일합니다.

- ts-jest, ts-loader : Jest에서 타입스크립트 기반의 코드를 테스트할 수 있게 해 줍니다.

- node-mocks-http : Next API routes를 테스트할 때 필요한 request, response 객체의 mock을 생성해 줍니다.

 1)tsconfig 파일에 설정을 추가해 줍니다.
 2) babelrc 파일에 프리셋을 설정해 줍니다.
 3) jest.config.json 파일을 설정해 줍니다.
 root path에 jest.config.json 파일을 생성 후 설정들을 넣어줍니다. 아래 설정은 공식 문서에서 추천하는 설정입니다.