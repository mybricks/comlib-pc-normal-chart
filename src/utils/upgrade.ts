import { initInput } from './constants';

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
      console.log(outputKey, 'outputKey');
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

const addMultipleOutputsAndRels = (configs: string[], input: any, output: any) => {
  configs.forEach((key) => {
    addOutputAndRel({
      input,
      output,
      outputKey: key,
      title: '完成',
      inputKey: key
    });
  });
};

const addMultipleInitInputOutputsAndRels = (input: any, output: any) => {
  initInput('default').forEach(({ id, title, schema = { type: 'any' } }) => {
    if (input.get(id) && !output.get(id)) {
      output.add(id, '完成', schema);
      input.get(id) && input.get(id)?.setRels([id]);
    }
  });
};

export {
  addOutputAndRel,
  handleOutputFn,
  addMultipleOutputsAndRels,
  addMultipleInitInputOutputsAndRels
};
