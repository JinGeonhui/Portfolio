export type Project = {
  name: string;
  contentPath: string;
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
  paragraphs: string;
};

export const projectData: Project[] = [
  {
    name: "다와",
    techStack: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Styled Components", "Zustand", "Axios", "xlsx"],
    mateNinfo: ["FrontEnd 3명", "BackEnd 2명", "Design 1명", "보일러플레이트", "Atomic Design Pattern", "PM"],
    contentPath: "/md/project/dawa.md",
    description:
      "교내 보건실 관리 서비스",
  },

  {
    name: "Pillchat",
    techStack: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Jotai", "Axios", "Husky", "Cypress", "shadcn/ui"],
    mateNinfo: ["FrontEnd 2명", "BackEnd 2명", "Design 1명", "사이드 프로젝트", "현직자", "대학생", "Atomic Design Pattern"],
    contentPath: "/md/project/pillchat.md",
    description:
      "전공 지식, 실습 지식, Q&A, 전문가와의 질의 응답 등 약대생을 위한 커뮤니티 기반 Q&A 웹앱"
  },

  {
    name: "Asis",
    techStack: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Zustand" ,"SSE" ,"Husky", "Axios"],
    mateNinfo: ["FrontEnd 1명", "BackEnd 2명", "PM", "Design", "Atomic Design Pattern", "보일러플레이트", "API Route"],
    contentPath: "/md/project/asis.md",
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
    paragraphs: "/md/about/flow.md",
  },
  {
    title: "최대 퀄리티의 사용자 경험(UX)을 제공합니다.",
    paragraphs: "/md/about/ux.md",
  },
];
