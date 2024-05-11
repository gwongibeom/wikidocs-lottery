# 위키독스 댓글 추첨기

<img style='width: 900px;' src='https://github.com/gwongibeom/wikidocs-lottery/blob/main/public/og_image.png?raw=true' />

위키독스 책의 댓글들을 랜덤으로 추첨 하는 추첨기입니다.

## 기능
- 원하는 페이지, 인원수의 댓글 추첨기능
- 추첨 결과 공유기능

## 작업내용

1. **wikidocs OPEN API**를 사용하여 페이지 존재 여부 확인 기능과 추첨 기능을 개발했습니다. 이 과정에서 wikidocs OPEN API의 **CORS 이슈**를 발견하여 **운영자와 커뮤니케이션**을 통해 해결했습니다.
2. **React Router Dom**을 이용해 라우팅 페이지와 **NAVBAR**를 구현했습니다.
3. **Typescript**를 사용하여 안정적인 타입 체크를 보장했습니다.
4. API 로직과 TITLE 변경 로직을 **커스텀 훅**으로 분리하여 개발했습니다.
5. **Button을 공동 컴포넌트화**하여 재사용성을 높였습니다.
6. 추첨 결과를 변수에 **object 형태로 저장**한 후 `JSON.stringify()`로 문자열화시켜 **base64로 인코딩**하여 URL에 담아 결과 페이지에 파라미터로 전달하여 결과를 공유할 수 있도록 개발했습니다.
7. [@loonywizard/js-confetti](https://github.com/loonywizard/js-confetti)를 사용하여 결과 페이지에 **파티클 이펙트**를 추가했습니다.
8. **ESLint**와 **Prettier**로 코드 컨벤션을 유지했습니다.
9. **카카오 애드핏 광고**를 삽입하여 수익을 창출했습니다.


## ESLINT & PRETTER

- [@mvlchain/eslint-config](https://github.com/mvlchain/eslint-config)
- [@mvlchain/prettier-config](https://github.com/mvlchain/prettier-config)
