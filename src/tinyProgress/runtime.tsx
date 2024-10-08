import React, { useEffect, useState } from 'react';
import { Progress } from '@ant-design/charts';
import { Data, MockData } from './constants';
import { Spin } from 'antd';
import { handleOutputFn } from '../utils';

export default function ({ data, env, inputs, outputs, style }: RuntimeParams<Data>) {
  const [percent, setPercent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data((val: React.SetStateAction<number>, relOutputs: any) => {
        if (typeof val === 'number') {
          setPercent(val);
        }
        handleOutputFn(relOutputs, outputs, 'data', val);
      });
      setLoading(false);
    }
  }, []);

  return (
    <Spin spinning={loading}>
      {!env.runtime || percent !== null ? (
        <Progress
          style={{ width: style.width, height: style.height }}
          {...data.config}
          percent={env.edit ? MockData : percent}
          key={env.edit ? JSON.stringify(data.config) : undefined}
        />
      ) : (
        <div style={{ width: style.width, height: style.height }}></div>
      )}
    </Spin>
  );
}
