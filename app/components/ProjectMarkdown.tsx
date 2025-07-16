'use client'

import { useEffect, useState } from "react";
import MarkdownRender from "./MarkdownRender";

interface Props {
  path: string;
}

export default function ProjectMarkdown({ path }: Props) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then(setMarkdown);
  }, [path]);

  return <MarkdownRender content={markdown} />;
}
