import { useEffect, useState } from "react";
import Prism from "prismjs";

/**
 * Don't forget to import a theme.
 *
 * View the node_modules/prismjs/themes directory for a list of options.
 *
 * By default, these include
 *
 * - coy (dated)
 * - dark (bad)
 * - funky (bad)
 * - okaidia (SublimeText)
 * - solarizedlight (poor accessibility)
 * - tomorrow (WebStorm)
 * - twilight (ugly)
 */
import "prismjs/themes/prism-tomorrow.css";

export interface CodeSnippetProps {
  /**
   * The type of file to use (class name to use)
   */
  language: string;

  /**
   * The path/filename of the code snippet example, relative to root
   */
  source: "language-js" | string;
}

export const CodeSnippet = ({ language = "", source = "" }: CodeSnippetProps) => {
  const [code, setCode] = useState<string>("");

  /**
   * When the code changes
   */
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  /**
   * When the page first loads
   */
  useEffect(() => {
    console.log("Fetching file", source);

    fetch(source)
      .then((response) => response.body)
      .then((body) => {
        const reader = body?.getReader();

        return new ReadableStream({
          start(controller) {
            return pump();

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            function pump() {
              return reader?.read().then(({ done, value }) => {
                // when no more data needs to be consumed, close the stream
                if (done) {
                  controller.close();
                  return;
                }

                // enqueue the next data chunk into our target stream
                controller.enqueue(value);
                return pump();
              });
            }
          }
        });
      })

      // Create a new response out of the stream
      .then((stream) => new Response(stream))

      // Create an object URL for the response
      .then((response) => {
        return response.text();
      })

      .then((text) => {
        setCode(text);
      })

      .catch((err) => console.error(err));

  }, [source]);

  if (!code) {
    return (
      <div>Loading&hellip;</div>
    );
  }

  return (
    <article>
      <div className="line-numbers">
        <pre>
          <code className={language}>{code}</code>
        </pre>
      </div>
    </article>
  );
};

export default CodeSnippet;
