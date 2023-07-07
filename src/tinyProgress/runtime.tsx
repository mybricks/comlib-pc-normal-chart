import React, { useEffect, useState } from 'react';
import { Progress } from '@ant-design/charts';
import { Data, MockData } from './constants';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (env.runtime) {
      inputs.data((val: React.SetStateAction<number>) => {
        if (typeof val === 'number') {
          setPercent(val);
        }
      });
    }
  }, []);

  return (
    <Progress
      {...style}
      {...data.config}
      percent={env.edit ? MockData : percent}
      key={env.edit ? JSON.stringify(data.config) : undefined}
    />
  );
}
