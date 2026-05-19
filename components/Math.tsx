import katex from "katex";

/**
 * Server-rendered KaTeX. `tex` is locale-invariant and is never translated.
 */
export default function Math({
  tex,
  display = true,
}: {
  tex: string;
  display?: boolean;
}) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    output: "html",
  });
  return (
    <span
      className={display ? "my-3 block overflow-x-auto" : "inline-block"}
      // KaTeX output is trusted (authored constants, throwOnError:false)
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
