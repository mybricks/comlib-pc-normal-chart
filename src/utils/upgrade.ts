const addOutputAndRel = ({
  input,
  output,
  outputKey,
  title,
  inputKey,
  schema
}: {
  input: any;
  output: any;
  outputKey: string;
  title: string;
  inputKey: string;
  schema?: Record<string, any>;
}) => {
  if (!output.get(outputKey)) {
    const Input = input.get(inputKey);
    output.add(outputKey, title, schema || Input?.schema || { type: 'any' });
    if (Input) {
      Input?.setRels([outputKey]);
    }
  }
};

// IO串行处理
const handleOutputFn = (
  relOutputs: { [x: string]: any },
  outputs: { [x: string]: any },
  OutputId: string,
  val: any
) => {
  const outputFn = relOutputs?.[OutputId] || outputs[OutputId];
  if (outputFn) {
    outputFn(val);
  }
};

function addMultipleOutputsAndRels(configs: string[], input: any, output: any) {
  configs.forEach((key) => {
    addOutputAndRel({
      input,
      output,
      outputKey: key,
      title: '完成',
      inputKey: key
    });
  });
}

export { addOutputAndRel, handleOutputFn, addMultipleOutputsAndRels };
