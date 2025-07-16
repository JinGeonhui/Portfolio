[FrontEnd repository](https://github.com/JinGeonhui/Asis_beta)

기존 TodoList를 통해 하루 할 일을 관리하였는데 AI를 이용하여 Todo마다 카테고리를 지정하고 카테고리 별로 분류해주면 보기 편하겠다고 생각되어 만들게 된 서비스입니다.
2025 AI EXPO 행사에서 부스 운영을 하였습니다.

### 구현
- 낙관적 UI를 이용하여 기존 상호작용을 통한 Todo의 성공 여부 UI표시를 3초에서 0초로 시간 단축하였습니다.
- SSE를 이용하여 친구 추가, 팀 초대, Todo 성공여부, 수정, 삭제 등 다양한 상호작용 기능에 실시간 처리를 하였습니다.
[[Commit]](https://github.com/JinGeonhui/Asis_beta/commit/f0b2f111421cda7b51054e10c1b9772aa1518b48)

- 똑똑한 개발자라는 IT회사에서 제공하는 보일러플레이트를 기반으로 Atomic Desgin Pattern, Barrel export 등을 사용하여 컴포넌트 관리를 진행하였습니다.