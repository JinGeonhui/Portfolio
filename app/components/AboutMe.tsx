import { About } from "../data/data";

export function AboutMe({ about }: { about: About }) {
  return (
    <div className="mt-10 w-[70%] flex flex-col items-start">
      <p className="font-bold text-[18px]">{about.title}</p>
      {about.paragraphs.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}