import React, { useEffect, useState } from 'react';
import { RingProgress } from '@ant-design/charts';
import { Data, InputIds, MockData } from './constants';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (env.runtime) {
      inputs[InputIds.SetData]((val) => {
        if (typeof val === 'number') {
          setPercent(val);
        }
      });
    }
  }, []);

  return (
    <RingProgress
      {...style}
      {...data.config}
      percent={env.edit ? MockData : percent}
      key={env.edit ? JSON.stringify(data.config) : undefined}
    />
  );
}
