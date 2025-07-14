export type Project = {
  name: string;
  content: string;
  techStack: string[];
  mateNinfo: string[];
  description: string;
};

export type Contact = {
  email: string,
  phone: string,
}

export type About = {
  title: string;
  paragraphs: string[];
};

export const projectData: Project[] = [
  {
    name: "다와",
    techStack: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Styled Components", "Zustand", "Axios", "xlsx"],
    mateNinfo: ["FrontEnd 3명", "BackEnd 2명", "Design 1명", "보일러플레이트", "Atomic Design Pattern", "PM"],
    content: "[FrontEnd repository](https://github.com/Dawa-kody/DAWA-Frontend/tree/develop)\n\n기존 엑셀 기반의 규태맘 보건일지의 공식적인 프로그램이 아닌 문제와 기능 오류 문제를 해결하기 위해 개발한 보건실 관리 서비스입니다. 2025 AI SW 체험 축전에서 광주소프트웨어마이스터고등학교 대표로 부스 운영을 하였으며 420명 중 97%의 긍정적인 반응을 얻었습니다. 현재 전교생 200+명과 교직원 전원이 사용 중이며, 지속적으로 유지보수 중입니다.\n### 구현\n- xlsx 라이브러리를 이용하여 xlsx 파일에서의 데이터를 패칭 및 생성 규칙을 통해 이메일 자동 생성 및 교내 전교생 기본 정보 자동 등록하여 기존 수기 방식으로 진행해서 생긴 데이터 중복/오탈자 문제를 해결 [[PR]](https://github.com/Dawa-kody/DAWA-Frontend/pull/174)\n- Zustand를 이용한 전역 데이터를 정해진 주기마다 불러오는 방식으로 약을 생성/수정/삭제 가능한 기록 테이블을 구현하였다. 이를 통하여 기존 약의 개수, 유통기한 등 약에 대한 정보를 확인하는 주기를 월 1회에서 연 1회로 단축하였으며, 기존 재고 파악 시간을 95% 단축하였다. [[PR]](https://github.com/Dawa-kody/DAWA-Frontend/pull/170/commits/2090a843e265f0e57f22732877b1f49234b924a4)\n### 트러블 슈팅\n-  기존 백업 기능의 저장 누락 및 비효율적인 폴더 구조 문제를 해결하기 위해, 데이터 저장을 DB 기반으로 전환하고 자동 백업 기능을 구현했습니다. 사용자는 원하는 날짜를 선택해 백업 데이터를 쉽게 다운로드할 수 있으며, 백엔드에서는 요청한 데이터를 Excel로 변환하여 응답하고, 프론트에서는 createObjectURL로 다운로드를 지원합니다. [[PR]](https://github.com/Dawa-kody/DAWA-Frontend/pull/136)",
    description:
      "교내 보건실 관리 서비스",
  },

  {
    name: "Pillchat",
    techStack: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Jotai", "Axios", "Husky", "Cypress"],
    mateNinfo: ["FrontEnd 2명", "BackEnd 2명", "Design 1명", "사이드 프로젝트", "현직자", "대학생", "Atomic Design Pattern"],
    content: "[FrontEnd repository](https://github.com/YakchatProject/Yakchat_Front)\n\n공부 자료도 부족하고, 약학 공부에 대한 접근성이 안 좋은 환경을 가진 대학생분들을 위해 커뮤니티 기반 Q&A 웹앱입니다. 현재 현직 개발자 분들과 고려대 학생분들이 각각 개발진, 기획자 분야로 함께 진행하고 있습니다.\n### 구현\n- 기존 페이지 방식으로 진행한다면 회원가입 7페이지가 걸리는데, 이것을 step이라는 변수를 이용하여 프로세스화하여 한 페이지 코드 안에 로그인 프로세스 전체를 구현함\n### 성능 고도화\n- 기존 컴포넌트 구조의 복잡성과 재사용성 문제를 해결하기 위해 Atomic Design Pattern을 제안하였고, 역할별 컴포넌트 분리를 기반으로 디렉토리를 재구성하였습니다. 컴포넌트 가독성과 유지보수성이 향상되었고, 중복 제거를 통해 번들 크기 최적화도 진행되어 사용자 경험이 함께 개선되었습니다. [[PR]](https://github.com/YakchatProject/Yakchat_Front/pull/50)\n- 커밋 메시지 일관성 부족과 테스트 비효율 문제를 해결하기 위해 Husky 기반 커밋 툴과 Cypress를 이용한 e2e 테스트 환경을 도입했습니다. 프론트엔드 단독 테스트 환경이 구성되어, 기능 검증 시간이 단축되었고, 코드 리뷰 체계를 강화하여 팀 내 코드 품질과 협업 효율을 높였습니다. [[PR]](https://github.com/YakchatProject/Yakchat_Front/pull/45)",
    description:
      "전공 지식, 실습 지식, Q&A, 전문가와의 질의 응답 등 약대생을 위한 커뮤니티 기반 Q&A 웹앱"
  },

  {
    name: "Asis",
    techStack: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Zustand" ,"SSE" ,"Husky", "Axios"],
    mateNinfo: ["FrontEnd 1명", "BackEnd 2명", "PM", "Design", "Atomic Design Pattern", "보일러플레이트", "API Route"],
    content: "[FrontEnd repository](https://github.com/JinGeonhui/Asis_beta)\n\n기존 TodoList를 통해 하루 할 일을 관리하였는데 AI를 이용하여 Todo마다 카테고리를 지정하고 카테고리 별로 분류해주면 보기 편하겠다고 생각되어 만들게 된 서비스입니다. 2025 AI EXPO 행사에서 부스 운영을 하였습니다.\n### 구현\n- 낙관적 UI를 이용하여 기존 상호작용을 통한 Todo의 성공 여부 UI표시를 3초에서 0초로 시간 단축하였습니다.\n- SSE를 이용하여 친구 추가, 팀 초대, Todo 성공여부, 수정, 삭제 등 다양한 상호작용 기능에 실시간 처리를 하였습니다. [[Commit]](https://github.com/JinGeonhui/Asis_beta/commit/f0b2f111421cda7b51054e10c1b9772aa1518b48)\n- 똑똑한 개발자라는 IT회사에서 제공하는 보일러플레이트를 기반으로 Atomic Desgin Pattern, Barrel export 등을 사용하여 컴포넌트 관리를 진행하였습니다.",
    description:
      "AI를 활용한 TodoList 기반 자기개발 지원 서비스",
  },
];

export const ContactData: Contact[] = [
  {
    email: 's23054@gsm.hs.kr',
    phone: '010-5797-5387'
  }
]

export const aboutData: About[] = [
  {
    title: "FLOW(흐름)을 만들어냅니다.",
    paragraphs: [
      "팀장으로서 스크럼 방식과 우선순위 조율을 통해 팀원들이 집중할 수 있는 환경을 조성하고,",
      "기획 변경이나 리스크 발생 시 선제적으로 대응하여 일정 지연 없이 프로젝트를 완수했습니다.",
      "그 결과, 완성된 교내 보건실 관리 서비스는 420명 중 97%의 긍정적인 평가를 받았습니다.",
    ],
  },
  {
    title: "최대 퀄리티의 사용자 경험(UX)을 제공합니다.",
    paragraphs: [
      "반응형&적응형 디자인, 낙관적 UI, 디자인 시스템 등 다양한 퍼블리싱 기술로 사용자 경험을 구현합니다.",
      "AI 활용 자기개발 지원 웹서비스에 낙관적 UI를 적용해 사용자 조작 직후 즉각 피드백을 제공,",
      "응답 시간을 기존 3초에서 0초로 단축하며 체감 성능을 100% 향상시켰습니다.",
    ],
  },
];
