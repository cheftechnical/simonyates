export default function ArrayFunction() {
  const array = ["11111", "22222", "3333", "4", "5"];
  console.log("array", array);

  const callbackFn = function (element: any, index: any, array: any) {
    console.log("Executing callbackFn()", {
      "0": element,
      "1": index,
      "2": array,
    });
    // return 1;

    return parseInt;
  };

  const result = array.map(callbackFn);
  console.log("return", result);

  // parseInt(element, index, array)

  const resultParseInt = array.map(parseInt);
  console.log("resultParseInt", resultParseInt);

  console.log("Iterations", {
    0: parseInt("11111", 0),
    1: parseInt("22222", 1),
    2: parseInt("33333", 2),
    3: parseInt("44444", 3),
    4: parseInt("55555", 4),
  });

  return <div>[ArrayFunction]</div>;
}
