import { Badge } from "@/components/ui/badge";
import { CaruselSection } from "./components/CaruselSection";
import { AboutMe } from "./components/AboutMe";
import { aboutData } from "./data/data";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-10 font-sans">
      <section id="Header" className="w-[70%] flex flex-col items-start">
        <p className="font-bold text-[24px]">
          안녕하세요, FLOW를 읽고 설계하는 개발자 진건희입니다.
        </p>
        <div className="flex gap-[10px] mt-5 flex-wrap">
          <Badge variant="default">프론트엔드 개발</Badge>
          <Badge variant="default">다양한 실무 경험</Badge>
          <Badge variant="secondary">UI/UX 디자인</Badge>
          <Badge variant="secondary">프로젝트 리드 경험 다수</Badge>
        </div>
      </section>

      <section id="About me" className="mt-2 w-[70%] flex flex-col items-start">
        {aboutData.map((about, index) => (
          <AboutMe key={index} about={about} />
        ))}
      </section>

      <section id="project" className="w-[70%] flex flex-col items-start mt-[4rem]">
        <p className="font-semibold text-[21px] mb-4">
          다양한 실무 경험을 보유하고 있습니다.
        </p>

        <CaruselSection />
      </section>
    </div>
  );
}
