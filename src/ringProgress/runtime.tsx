import React, { useEffect, useState } from 'react';
import { RingProgress } from '@ant-design/charts';
import { Data } from './constants';
import EmptyWrap from '../components/emptyWrap';

export default function ({ data, inputs, env, title }) {
  const [config, setConfig] = useState<Data>(data);

  useEffect(() => {
    if (env.runtime) {
      inputs.style((ds: any) => {
        setConfig({ ...config, ...ds });
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
      isEmpty={data.useEmpty && env.runtime && typeof config.percent !== 'number'}
      emptyText={data.emptyText}
      small
    >
      <RingProgress {...config} />
    </EmptyWrap>
  );
}
