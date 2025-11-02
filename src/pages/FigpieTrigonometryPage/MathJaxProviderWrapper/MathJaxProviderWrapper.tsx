import { MathJaxProvider } from "mathjax3-react";

interface Props {
  children: any;
}

export function MathJaxProviderWrapper(props: Props) {
  const {children} = props;

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
