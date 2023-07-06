import React, { useEffect, useState } from 'react';
import { RingProgress } from '@ant-design/charts';
import { Data, MockData } from './constants';
import EmptyWrap from '../components/emptyWrap';

export default function ({ data, inputs, env, title }) {
  const [config, setConfig] = useState<Data | {}>({});

  useEffect(() => {
    if (env.runtime) {
      inputs.style((ds: any) => {
        setConfig({ ...data, ...config, ...ds });
      });

      inputs.percent((ds: number) => {
        const dsNum = Number(ds);
        if (isNaN(dsNum)) {
          console.error(`${title}输入数据不合法！`);
        } else {
          setConfig({ ...config, percent: dsNum });
        }
      });

      const ids = ['statistic', 'tooltip'];
      ids.forEach((id) => {
        inputs[id]((ds: Object) => {
          setConfig({ ...config, [id]: { ...ds } });
        });
      });
    }
  }, []);

  return (
    <EmptyWrap
      isEmpty={data.useEmpty && env.runtime && !Object.keys(config).length}
      emptyText={data.emptyText}
      small
    >
      <RingProgress
        {...(env.edit ? MockData['default'] : config)}
        key={env.edit ? JSON.stringify(data.config) : undefined}
      />
    </EmptyWrap>
  );
}
