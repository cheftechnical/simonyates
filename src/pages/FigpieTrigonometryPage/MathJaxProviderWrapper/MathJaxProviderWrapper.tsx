import { MathJaxProvider } from "mathjax3-react";

interface Props {
  children: any;
}

export function MathJaxProviderWrapper(props: Props) {
  const {children} = props;

  // return (
  // 	<MathJax.Provider
  // 		options={{
  // 			loader: {
  // 				load: [
  // 					'[tex]/color',
  // 				]
  // 			},
  // 			tex: {
  // 				packages: {
  // 					'[+]': ['color']
  // 				},
  // 			},
  // 		}}
  // 	>
  // 		{children}
  // 	</MathJax.Provider>
  // )

  return (
    <MathJaxProvider>
      {/*<MathJax.Formula formula="$$\int x^2dx$$" />*/}
      {/*<MathJaxFormula formula="$$\int x^2dx$$"/>*/}
      {children}
    </MathJaxProvider>
  );
}

export default MathJaxProviderWrapper;
