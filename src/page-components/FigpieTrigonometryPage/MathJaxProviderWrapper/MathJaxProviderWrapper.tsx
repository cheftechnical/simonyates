'use client';

import { MathJaxProvider } from "mathjax3-react";
import { useEffect, useState } from "react";

interface Props {
  children: any;
}

export function MathJaxProviderWrapper(props: Props) {
  const {children} = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render MathJax on client side
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <MathJaxProvider
      options={{
        loader: {
          load: [
            '[tex]/color',
          ]
        },
        tex: {
          packages: {
            '[+]': ['color']
          },
        },
      }}
    >
      {children}
    </MathJaxProvider>
  );
}

export default MathJaxProviderWrapper;
