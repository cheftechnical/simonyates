import PageWrapper from "../../components/PageWrapper";
import { Typography } from "@mui/material";
import MyContainer from "../../styling/MyContainer";
import Prism from "prismjs";
import { useEffect, useState } from "react";

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

export function CodePage() {
  const [ code, setCode ] = useState<string>('');

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
    console.log('fetching file');

    fetch('/libs/react.tsx')
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
              })
            }
          }
        })
      })

      // Create a new response out of the stream
      .then((stream) => new Response(stream))

      // Create an object URL for the response
      .then((response) => {
        return response.text()
      })

      .then((text) => {
        setCode(text);
      })

      .catch((err) => console.error(err));

  }, []);

  return (
    <PageWrapper title="Code">
      <MyContainer>
        <article>
          <Typography component="h1" variant="primaryH1">
            Code
          </Typography>

          <pre><code className="language-css">{`p { color: red }`}</code></pre>

<pre>
  <code className="language-javascript">
  {`
    onSubmit(e) {
      e.preventDefault();
      const job = {
        title: 'Developer',
        company: 'Facebook' 
        };
      }
  `}
  </code>
</pre>

          <pre className="line-numbers">
            <code className="language-js">{code}</code>
          </pre>

        </article>
      </MyContainer>
    </PageWrapper>
  );
}

export default CodePage;
