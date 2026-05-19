import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/**
 * Renders a trusted, authored Markdown string (GFM tables + KaTeX math).
 * Server component — no client JS shipped for the document body.
 */
export default function MarkdownDoc({ markdown }: { markdown: string }) {
  return (
    <div className="prose-doc max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
