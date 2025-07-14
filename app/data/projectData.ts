export type Project = {
  name: string;
  content: string;
  techStack: string[];
  teammate: string[];
  description: string;
};

export const projectData: Project[] = [
  {
    name: "다와",
    techStack: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Styled Components", "Zustand", "Axios"],
    teammate: ["FrontEnd 3명", "BackEnd 2명", "Design 1명"],
    content: '[FrontEnd repository](https://github.com/Dawa-kody/DAWA-Frontend/tree/develop)\n\n기존 엑셀 기반의 규태맘 보건일지의 공식적인 프로그램이 아닌 문제와 기능 오류 문제를 해결하기 위해 개발한 보건실 관리 서비스입니다.\n현재 전교생 200+명과 교직원 전원이 사용 중이며, 지속적으로 유지보수 중입니다.\n### 구현\n- xlsx 라이브러리를 이용하여 xlsx 파일에서의 데이터를 패칭 및 생성 규칙을 통해 이메일 자동 생성 및 교내 전교생 기본 정보 자동 등록하여 기존 수기 방식으로 진행해서 생긴 데이터 중복/오탈자 문제를 해결 [PR](https://github.com/Dawa-kody/DAWA-Frontend/pull/174)\n- ',
    description:
      "교내 보건실 관리 서비스",
  },
  
  {
    name: "Asis",
    techStack: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Zustand" ,"SSE" ,"Husky", "Axios"],
    teammate: ["FrontEnd 1명", "BackEnd 2명"],
    content: "dd",
    description:
      "AI를 활용한 TodoList 기반 자기개발 지원 서비스",
  },
];
