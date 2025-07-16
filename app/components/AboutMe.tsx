'use client';

import { useEffect, useState } from "react";
import { About } from "../data/data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export function AboutMe({ about }: { about: About }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(about.paragraphs)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load markdown");
        return res.text();
      })
      .then(setMarkdown)
      .catch(() => setMarkdown("내용을 불러올 수 없습니다."));
  }, [about.paragraphs]);

  return (
    <div className="mt-10 w-[70%] flex flex-col items-start">
      <p className="font-bold text-[18px]">{about.title}</p>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
