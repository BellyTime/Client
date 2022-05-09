# Client


- 프로젝트 설명
주기때마다 내가 먹고 싶은 음식을 알람받고, 설정하세요!

- 핵심기능
로그인을 통한 개인 프로필을 제공합니다
친구, 가게를 팔로우 할 수있고 포스팅을 구독할 수 있습니다.
가까운 가게들을 조회할 수 있고, 필터링하여 정렬 할 수 있습니다.
가게를 예약할 수 있습니다.
친구와 가게 사장님간의 채팅을 할 수 있습니다.
쿨타임을 설정하고 해당 쿨타임에 음식에 대한 알림을 받아 볼 수 있습니다.

- 디렉토리 구조

```
├── __tests__
│   ├── api
│   ├── components
│   └── page
├── components(페이지별 컴포넌트)
│   ├── Navbar (하단 네비게이션)
│   ├── chatting (채팅)
│   ├── cooltime (쿨타임)
│   ├── followingFriend (팔로우하는 친구리스트)
│   ├── followingShop (팔로우하는 가게리스트)
│   ├── main (메인페이지 컴포넌트)
│   ├── modal (모달 구성 컴포넌트)
│   ├── myPage (마이페이지 컴포넌트)
│   ├── recommend (추천가게 컴포넌트)
│   ├── reservation (예약한 가계 리스트)
│   ├── search (검색페이지 컴포넌트)
│   └── validation (유효성 검사)
├── fetch (페이지별 api)
│   ├── chat (채팅 관련 api)
│   ├── common (axios 인터셉터)
│   ├── coolTime (쿨타임)
│   ├── instance (기능별 인스턴스(로그인 시))
│   ├── main (메인페이지)
│   ├── memberPage (로그인 및 회원가입 페이지)
│   ├── myPage (마이페이지)
│   ├── recommend (추천페이지)
│   ├── search (검색페이지)
│   └── shop (가게별 )
├── pages
│   ├── api ()
│   ├── chatting ()
│   ├── mypage ()
│   ├── oauth2 ()
│   ├── recommend ()
│   ├── shop ()
│   └── shopfeed ()
├── public
│   ├── foodImgs ()
│   ├── icons ()
│   └── static ()
├── state ()
├── style ()
├── styles ()
├── useHook ()
└── util
    └── chatting ()
    ```
